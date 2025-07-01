from flask import Flask, render_template_string, request, session, redirect, url_for
import os
import requests 
import boto3
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

sns = boto3.client('sns', region_name='ap-south-1')
dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')
SNS_TOPIC_ARN = 'arn:aws:sns:ap-south-1:123456789012:MySNSTopic'

def get_ec2_metadata():
    try:
        response = requests.get("http://169.254.169.254/latest/meta-data/public-ipv4", timeout=2)
        if response.status_code == 200:
            return response.text
        else:
            return "Metadata not found"
    except:
        return "Not running on EC2"

app = Flask(__name__)
app.secret_key = 'Homemade_secret_key'

users_table = dynamodb.Table('Users')

# Product List
products_list = [
    {"id": 1, "name": "Fish Pickle", "price": 300, "image": "/static/images/fish-pickle.png", "description": "Authentic fish pickle with spicy flavor", "category": "nonveg"},
    {"id": 2, "name": "Gongura Prawn Pickle", "price": 320, "image": "/static/images/gongura-prawn-pickle.webp", "description": "Prawns with traditional gongura taste", "category": "nonveg"},
    {"id": 3, "name": "Mutton Pickle", "price": 350, "image": "/static/images/mutton-pickle.webp", "description": "Juicy and spicy mutton pieces", "category": "nonveg"},
    {"id": 4, "name": "Chintakaya Pickle", "price": 200, "image": "/static/images/chintakaya-pickle.jpg", "description": "Sour tamarind pickle with homemade taste", "category": "veg"},
    {"id": 5, "name": "Gongura Pickle", "price": 180, "image": "/static/images/green-chili-pickle.jpg", "description": "Spicy gongura pickle for hot lovers", "category": "veg"},
    {"id": 6, "name": "Instant Tomato Pickle", "price": 250, "image": "/static/images/instant-tomato-pickle.png", "description": "Ready-made tomato pickle with rich aroma", "category": "veg"},
    {"id": 7, "name": "Pandumirchi Pickle", "price": 240, "image": "/static/images/pandumirchi-pickle.webp", "description": "Red chili pickle with tangy punch", "category": "veg"},
    {"id": 8, "name": "Jantikalu", "price": 150, "image": "/static/images/jantikalu.jpg", "description": "Crunchy Andhra traditional snack", "category": "snacks"},
    {"id": 9, "name": "Bobbatlu & Ariselu", "price": 160, "image": "/static/images/bobbatlu-ariselu.avif", "description": "Festival special sweet treats", "category": "snacks"}
]

@app.route('/')
def home():
    ec2_ip = get_ec2_metadata()
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
        <p><strong>EC2 Public IP:</strong> {{ ec2_ip }}</p>
    </body>
    </html>
    ''', ec2_ip=ec2_ip)

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
        response = users_table.get_item(Key={'email': email})
        user = response.get('Item')
        if user and user['password'] == password:
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
        response = users_table.get_item(Key={'email': email})
        if 'Item' in response:
            return "User already exists. <a href='/register'>Try again</a>"
        users_table.put_item(Item={'email': email, 'password': password})
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

@app.route('/contact')
def contact():
    return render_template_string('''
    <h2>Contact Us</h2>
    <p>Email: contact@Homemadepickles.com</p>
    <p>Phone: +91-9876543210</p>
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
    cart = session.get('cart', {})
    email = session.get('user', 'Guest')
    items = []
    for pid, qty in cart.items():
        for p in products_list:
            if str(p['id']) == pid:
                items.append(f"{p['name']} × {qty}")
    item_list = "\n".join(items) if items else "No items"
    message = f"🛍 New Order from {email}\n\nItems:\n{item_list}"
    subject = "New Order Notification - Homemade Pickles"

    try:
        sns.publish(TopicArn=SNS_TOPIC_ARN, Message=message, Subject=subject)
        sns_status = "SNS notification sent successfully!"
    except Exception as e:
        sns_status = f"Error sending SNS message: {e}"

    session.pop('cart', None)

    return render_template_string(f'''
        <h2>✅ Order Successful!</h2>
        <p>Thank you for your order!</p>
        <p>{sns_status}</p>
        <a href="/">Back to Home</a>
    ''')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
