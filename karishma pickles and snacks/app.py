from flask import Flask, render_template_string, request, session, redirect, url_for
import os
import boto3
import requests
import uuid

app = Flask(__name__)

app.secret_key = 'Homemade_secret_key'
# AWS configuration
region = 'ap-south-1'  # Change if needed

dynamodb = boto3.resource('dynamodb', region_name=region)
sns = boto3.client('sns', region_name=region)
SNS_TOPIC_ARN = 'arn:aws:sns:ap-south-1:YOUR_ACCOUNT_ID:your-topic-name'  

# DynamoDB tables
contacts_table = dynamodb.Table('contacts')
reviews_table = dynamodb.Table('reviews')


# Temporary in-memory user store
users = {}

# Product List
products_list = [
    # Non-Veg Pickles
    {"id": 1, "name": "Fish Pickle", "price": 300, "image": "/static/images/fish-pickle.png", "description": "Authentic fish pickle with spicy flavor", "category": "nonveg"},
    {"id": 2, "name": "Gongura Prawn Pickle", "price": 320, "image": "/static/images/gongura-prawn-pickle.webp", "description": "Prawns with traditional gongura taste", "category": "nonveg"},
    {"id": 3, "name": "Mutton Pickle", "price": 350, "image": "/static/images/mutton-pickle.webp", "description": "Juicy and spicy mutton pieces", "category": "nonveg"},

    # Veg Pickles
    {"id": 4, "name": "Chintakaya Pickle", "price": 200, "image": "/static/images/chintakaya-pickle.jpg", "description": "Sour tamarind pickle with homemade taste", "category": "veg"},
    {"id": 5, "name": "Gongura Pickle", "price": 180, "image": "/static/images/green-chili-pickle.jpg", "description": "Spicy gongura pickle for hot lovers", "category": "veg"},
    {"id": 6, "name": "Instant Tomato Pickle", "price": 250, "image": "/static/images/instant-tomato-pickle.png", "description": "Ready-made tomato pickle with rich aroma", "category": "veg"},
    {"id": 7, "name": "Pandumirchi Pickle", "price": 240, "image": "/static/images/pandumirchi-pickle.webp", "description": "Red chili pickle with tangy punch", "category": "veg"},

    # Snacks
    {"id": 8, "name": "Jantikalu", "price": 150, "image": "/static/images/jantikalu.jpg", "description": "Crunchy Andhra traditional snack", "category": "snacks"},
    {"id": 9, "name": "Bobbatlu & Ariselu", "price": 160, "image": "/static/images/bobbatlu-ariselu.avif", "description": "Festival special sweet treats", "category": "snacks"}
]

@app.route('/')
def home():
    print("SESSION:", session)  

    return render_template_string('''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Home - Homemade pickles and snacks</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="p-6 bg-pink-50 text-gray-800">
        {% if 'user' in session %}
            <h2 class="text-xl font-bold">Welcome {{ session['user'] }}!</h2>
        {% endif %}

        <nav class="my-4 space-x-2">
            <a href="/" class="text-blue-600 hover:underline">Home</a> |
            {% if 'user' not in session %}
                <a href="/login" class="text-blue-600 hover:underline">Login</a> |
                <a href="/register" class="text-blue-600 hover:underline">Register</a> |
            {% endif %}
            <a href="/veg" class="text-blue-600 hover:underline">Veg Pickles</a> |
            <a href="/nonveg" class="text-blue-600 hover:underline">Non-Veg Pickles</a> |
            <a href="/snacks" class="text-blue-600 hover:underline">Snacks</a> |
            <a href="/about" class="text-blue-600 hover:underline">About</a> |
            <a href="/contact" class="text-blue-600 hover:underline">Contact</a> |
            <a href="/cart" class="text-blue-600 hover:underline">Cart</a>
            {% if 'user' in session %}
                | <a href="/logout" class="text-blue-600 hover:underline">Logout</a>
            {% endif %}
        </nav>

        <p>This is the homepage for Homemade Pickles and Snacks.</p>
    </body>
    </html>
    ''')

@app.route('/veg')
def veg():
    veg_items = [p for p in products_list if p['category'] == 'veg']
    return render_template_string(product_template(), products=veg_items, title="Veg Pickles")

@app.route('/nonveg')
def nonveg():
    nonveg_items = [p for p in products_list if p['category'] == 'nonveg']
    return render_template_string(product_template(), products=nonveg_items, title="Non-Veg Pickles")

@app.route('/snacks')
def snacks():
    snacks_items = [p for p in products_list if p['category'] == 'snacks']
    return render_template_string(product_template(), products=snacks_items, title="Snacks")

def product_template():
    return '''
    <h2>{{ title }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {% for p in products %}
        <div class="border p-4 rounded shadow">
            <img src="{{ p.image }}" class="w-full h-48 object-cover mb-2">
            <h3 class="font-bold">{{ p.name }}</h3>
            <p>₹{{ p.price }}</p>
            <a href="/add_to_cart/{{ p.id }}" class="inline-block mt-2 px-3 py-1 bg-blue-500 text-white rounded">Add to Cart</a>
        </div>
        {% endfor %}
    </div>
    <br><a href="/">Back</a>
    '''

@app.route('/add_to_cart/<int:product_id>')
def add_to_cart(product_id):
    cart = session.get('cart', {})
    cart[str(product_id)] = cart.get(str(product_id), 0) + 1
    session['cart'] = cart
    return redirect(url_for('cart'))

@app.route('/cart')
def cart():
    cart = session.get('cart', {})
    items = []
    total = 0
    for pid, qty in cart.items():
        for p in products_list:
            if str(p['id']) == pid:
                item_total = p['price'] * qty
                total += item_total
                items.append({"name": p['name'], "qty": qty, "price": p['price'], "total": item_total})
    return render_template_string('''
    <h2>Your Cart</h2>
    {% if items %}
    <ul>
        {% for item in items %}
        <li>{{ item.name }} × {{ item.qty }} = ₹{{ item.total }}</li>
        {% endfor %}
    </ul>
    <p><strong>Total: ₹{{ total }}</strong></p>
    <a href="/checkout">Proceed to Checkout</a>
    {% else %}
    <p>Your cart is empty.</p>
    {% endif %}
    <br><a href="/">Back</a>
    ''', items=items, total=total)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if email in users and users[email] == password:
            session['user'] = email
            return redirect('/')
        return "Invalid credentials. <a href='/login'>Try again</a>"
    return render_template_string('''
        <h2>Login</h2>
        <form method="post">
            Email: <input name="email"><br>
            Password: <input name="password" type="password"><br>
            <button type="submit">Login</button>
        </form>
    ''')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        if email in users:
            return "User already exists. <a href='/register'>Try again</a>"
        users[email] = password
        return redirect('/login')
    return render_template_string('''
        <h2>Register</h2>
        <form method="post">
            Email: <input name="email"><br>
            Password: <input name="password" type="password"><br>
            <button type="submit">Register</button>
        </form>
    ''')

@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect('/')

@app.route('/about')
def about():
    return render_template_string('''
    <h2>About Us</h2>
    <p>Homemade Pickles is a homemade pickle and snack brand delivering traditional flavors.</p>
    <p>We use age-old recipes passed down through generations to preserve authentic taste.</p>
    <p>Each pickle is handmade with love, using high-quality, locally sourced ingredients.</p>
    <p>From spicy to tangy, our pickles cater to every Indian taste preference.</p>
    <p>We also offer crispy, delicious snacks perfect for any time of the day.</p>
    <p>Experience the magic of home-style food with Homemade Pickles & Snacks.</p>
    <a href="/">Back</a>
    ''')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        contact_id = str(uuid.uuid4())
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        contacts_table.put_item(Item={
            'contact_id': contact_id,
            'name': name,
            'email': email,
            'message': message
        })
        return render_template_string('''
            <h2>Thanks for contacting us!</h2>
            <a href="/">Back</a>
        ''')
    return render_template_string('''
        <h2>Contact Us</h2>
        <form method="post">
            Name: <input name="name"><br>
            Email: <input name="email"><br>
            Message: <textarea name="message"></textarea><br>
            <button type="submit">Send</button>
        </form>
        <a href="/">Back</a>
    ''')


@app.route('/checkout', methods=['GET', 'POST'])
def checkout():
    if request.method == 'POST':
        return redirect('/success')
    return render_template_string('''
    <h2>Checkout</h2>
    <form method="post">
        Name: <input name="name"><br>
        Address: <input name="address"><br>
        Phone: <input name="phone"><br>
        <button type="submit">Place Order</button>
    </form>
    <a href="/">Back</a>
    ''')


@app.route('/success')
def success():
    if 'user' in session:
        email = session['user']
    else:
        email = 'Guest'

    sns.publish(
        TopicArn=SNS_TOPIC_ARN,
        Message=f"New order placed by {email}!",
        Subject="New Order Notification"
    )
    return render_template_string('''
        <h2>✅ Order Successful!</h2>
        <p>Thank you for your order!</p>
        <a href="/">Back to Home</a>
    ''')


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)