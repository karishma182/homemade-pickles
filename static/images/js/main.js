<<<<<<< HEAD
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swetha Pickles and Snacks| Homemade Indian Pickles & Snacks</title>
    <meta name="description" content="Authentic homemade Indian pickles and snacks by Swetha Pickles and Snacks">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        header: "#facc15",  // Vibrant yellow
                        main: "#fef9c3",    // Pale yellow
                        footer: "#000000"   // Pure black
                    },
                    fontFamily: {
                        heading: ["'Playfair Display', serif"],
                        body: ["'Open Sans', sans-serif"]
                    }
                }
            }
        }
    </script>
    <link href="https://cdn.shopify.com/s/files/1/1857/6931/files/Indian-Pickle_10cc540d-27e3-4c82-b0ec-1d114a661776_600x600.jpg?v=1655543167<style>
        .hero-image {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
        }
        .product-card {
            transition: all 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body class="font-body bg-main text-gray-800">
    <!-- Yellow Header -->
    <header class="bg-header shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img src="https://cdn.shopify.com/s/files/1/1857/6931/files/Indian-Pickle_10cc540d-27e3-4c82-b0ec-1d114a661776_600x600.jpg?v=1655543167" alt="Swetha Pickles logo - traditional Indian pickle jar with yellow background" class="h-12 w-12 rounded-full object-cover border-2 border-white">
                    <h1 class="ml-3 text-2xl font-heading font-bold text-gray-800">Swetha Pickles</h1>
                </div>
                <nav class="hidden md:block">
                    <ul class="flex space-x-8">
                        <li><a href="#home" class="font-semibold text-gray-800 hover:text-white transition">Home</a></li>
                        <li><a href="#products" class="font-semibold text-gray-800 hover:text-white transition">Products</a></li>
                        <li><a href="#about" class="font-semibold text-gray-800 hover:text-white transition">About</a></li>
                        <li><a href="#contact" class="font-semibold text-gray-800 hover:text-white transition">Contact</a></li>
                    </ul>
                </nav>
                <button class="md:hidden text-gray-800">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section with Swetha Pickles name -->
    <section id="home" class="py-16 bg-main">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h2 class="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-800">Swetha Pickles and Snacks</h2>
                <p class="text-xl mb-6 text-gray-700">Authentic homemade Indian pickles & snacks</p>
                <div class="flex gap-4">
                    <a href="#products" class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition">Our Products</a>
                    <a href="#contact" class="border-2 border-header text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-header transition">Order Now</a>
                </div>
            </div>
            <div class="md:w-1/2">
                <img src="https://www.farmdidi.com/cdn/shop/articles/Blog-post-revised.webp?v=1670659916&width=1445" alt="Variety of Swetha Pickles products displayed on wooden table with spices" class="rounded-lg hero-image border-4 border-white" loading="lazy">
            </div>
        </div>
    </section>

    <!-- Products Section with food images -->
    <section id="products" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-800">Our Special Pickles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Product 1 - Mango Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://cinnamonsnail.com/wp-content/uploads/2023/07/Mango-pickle-02.jpg" alt="Swetha's Special Mango Pickle in glass jar with spices visible" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Special Mango Pickle</h3>
                        <p class="text-gray-600 mb-4">Raw mangoes with traditional spices and mustard oil</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹250</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <!-- Product 2 - Lemon Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://www.shutterstock.com/image-photo/spicy-tangy-homemade-lemon-pickle-260nw-2316101529.jpg" alt="Swetha's Lemon Pickle with whole spices in ceramic bowl" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Tangy Lemon Pickle</h3>
                        <p class="text-gray-600 mb-4">Juicy lemons with fenugreek and chili</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹220</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <!-- Product 3 - Mixed Veg Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/divya-r20180620215346113.jpeg" alt="Swetha's Mixed Vegetable Pickle with carrots, cauliflower and lime" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Mixed Veg Pickle</h3>
                        <p class="text-gray-600 mb-4">Carrot, cauliflower, lime and mango combo</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹280</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 4 - Garlic Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNmOpJDzNs5MMuI21ELT76xZgtKqI5CR_Mg&s" alt="Swetha's Garlic Pickle with whole garlic cloves in oil" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Spicy Garlic Pickle</h3>
                        <p class="text-gray-600 mb-4">Whole garlic cloves in spicy mustard oil</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹270</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 5 - Chilli Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://cinnamonsnail.com/wp-content/uploads/2023/07/green-chili-pickle-02.jpg" alt="Swetha's Green Chilli Pickle with whole chillies" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Green Chilli Pickle</h3>
                        <p class="text-gray-600 mb-4">Spicy green chillies with tangy spices</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹230</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 6 - chekkalu and chekkaralu -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://i.ytimg.com/vi/69jkEiK3XNs/sddefault.jpg" alt="Swetha's chekkalu and chekkaralu with more care " class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">chekkalu and chekkaralu</h3>
                        <p class="text-gray-600 mb-4">roasted chekkalu and chekkaralu with delicious taste</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹230</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 7 - Gongura Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://vellankifoods.com/cdn/shop/products/gongura_pickle_2.jpg?v=1680180278" alt="Swetha's Gongura Pickle with sorrel leaves" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Gongura Pickle</h3>
                        <p class="text-gray-600 mb-4">Tangy sorrel leaves with special spices</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹290</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-main">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZTb5Yfaimh094dyw2xLSPrxYz4yLo1GGEA&s" alt="Swetha preparing pickles and snacks  in her traditional kitchen with spices" class="rounded-lg shadow-xl border-4 border-white" loading="lazy">
                    <img src="https://masalamonk.com/wp-content/uploads/2025/02/Unusual-Indian-Pickles.jpg" alt="Swetha preparing pickles and snacks  in her traditional kitchen with spices" class="rounded-lg shadow-xl border-4 border-white" loading="lazy">
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-heading font-bold mb-6 text-gray-800">About Swetha Pickles and Snacks</h2>
                    <p class="mb-4 text-lg text-gray-700">Swetha Pickles and snacks is a homegrown brand that brings you authentic Indian pickles made with traditional recipes and the finest ingredients. Our pickles are made in small batches to ensure quality and freshness.</p>
                    <p class="mb-4 text-lg text-gray-700">Every jar of Swetha Pickles is prepared with the same care and love that goes into homemade pickles and snacks , using recipes perfected over generations in our family.</p>
                    <p class="text-lg text-gray-700">We use no artificial preservatives - just natural ingredients and traditional methods to create flavors that remind you of your grandmother's kitchen.</p>
                    
                    <div class="mt-8 bg-white p-6 rounded-lg shadow-sm border-l-4 border-header">
                        <h3 class="text-xl font-heading font-bold mb-3 text-gray-800">Our Process</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>Hand-selected fresh ingredients</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>Traditional sun-drying methods</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>Small batch preparation</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>No artificial preservatives</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-main p-6 rounded-lg border-2 border-header">
                    <div class="flex items-center mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3MgYXl7l8_5v3hgfkgmYmcZE2zrl4WTk6A&s" alt="Tasty Tradition" class="w-12 h-12 rounded-full object-cover border-2 border-white">>
                        <div class="ml-3">
                            <h4 class="font-bold">Ramesh Kumar</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-700">"The mango pickle tastes just like my mother used to make. Authentic flavor and perfect spice level!"</p>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-main p-6 rounded-lg border-2 border-header">
                    <div class="flex items-center mb-4">
                        <img src="https://photosmint.com/wp-content/uploads/2025/03/Indian-Beauty-DP.jpeg" alt="Customer Priya Sharma" class="w-12 h-12 rounded-full object-cover border-2 border-white">
                        <div class="ml-3">
                            <h4 class="font-bold">Priya Sharma</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-700">"The lemon pickle is my favorite! Tangy and spicy, perfect with curd rice. Will order again!"</p>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-main p-6 rounded-lg border-2 border-header">
                    <div class="flex items-center mb-4">
                        <img src="https://i.pinimg.com/736x/48/5a/01/485a0101007cd39acfb3fbeeefcc1075.jpg" alt="Customer Arjun Patel" class="w-12 h-12 rounded-full object-cover border-2 border-white">
                        <div class="ml-3">
                            <h4 class="font-bold">Arjun Patel</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-700">"Received my order quickly and packaging was excellent. The mixed veg pickle is amazing with rotis!"</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-800">Order Swetha Pickles and Snacks</h2>
            
            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/2">
                    <form class="space-y-4">
                        <div>
                            <label for="name" class="block text-gray-700 mb-2">Your Name</label>
                            <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header">
                        </div>
                        <div>
                            <label for="phone" class="block text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" id="phone" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header">
                        </div>
                        <div>
                            <label for="address" class="block text-gray-700 mb-2">Delivery Address</label>
                            <textarea id="address" rows="2" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header"></textarea>
                        </div>
                        <div>
                            <label for="order" class="block text-gray-700 mb-2">Your Order</label>
                            <textarea id="order" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header" placeholder="Which pickles would you like to order? Please mention quantities."></textarea>
                        </div>
                        <button type="submit" class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition">Place Order</button>
                    </form>
                </div>
                <div class="md:w-1/2 bg-main p-8 rounded-lg border-2 border-header">
                    <h3 class="text-xl font-heading font-bold mb-4 text-gray-800">Contact Details</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <i class="fas fa-map-marker-alt text-gray-800 mt-1 mr-3"></i>
                            <p>123 Pickle Street, Foodie Town, Hyderabad, India - 500001</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-phone-alt text-gray-800 mr-3"></i>
                            <p>+91 98765 43210</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-envelope text-gray-800 mr-3"></i>
                            <p>orders@swethapickles.com</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-clock text-gray-800 mr-3"></i>
                            <p>Monday-Saturday: 9AM - 6PM</p>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-heading font-bold mt-8 mb-4 text-gray-800">Follow Swetha Pickles</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-800 hover:text-pink-600 text-2xl"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-800 hover:text-blue-600 text-2xl"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-gray-800 hover:text-green-600 text-2xl"><i class="fab fa-whatsapp"></i></a>
                    </div>

                    <div class="mt-8">
                        <img src="https://m.media-amazon.com/images/I/61q7h-mZ1AL.UF1000,1000_QL80.jpg" alt="Swetha Pickles products gift pack" class="rounded-lg border-2 border-white">
                        <p class="mt-2 text-sm text-gray-200">Perfect gift packs available for festivals and special occasions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Black Footer -->
    <footer class="bg-footer text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl font-heading font-bold">Swetha Pickles</h3>
                    <p class="text-gray-400">Authentic homemade Indian pickles</p>
                </div>
                <div class="text-center md:text-right">
                    <p class="text-gray-400">&copy; 2023 Swetha Pickles. All rights reserved.</p>
                    <p class="text-gray-400">Made with <i class="fas fa-heart text-red-400"></i> in India</p>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.querySelector('.md\\:hidden');
            const navMenu = document.querySelector('nav ul');
            
            mobileMenuButton.addEventListener('click', function() {
                navMenu.classList.toggle('hidden');
                navMenu.classList.toggle('flex');
                navMenu.classList.toggle('flex-col');
                navMenu.classList.toggle('absolute');
                navMenu.classList.toggle('bg-header');
                navMenu.classList.toggle('w-full');
                navMenu.classList.toggle('left-0');
                navMenu.classList.toggle('top-16');
                navMenu.classList.toggle('p-4');
                navMenu.classList.toggle('space-y-4');
                navMenu.classList.toggle('space-x-8');
                navMenu.classList.toggle('shadow-md');
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    if(this.getAttribute('href') === '#') return;
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
    </script> 
</body>
=======
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Swetha Pickles and Snacks| Homemade Indian Pickles & Snacks</title>
    <meta name="description" content="Authentic homemade Indian pickles and snacks by Swetha Pickles and Snacks">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        header: "#facc15",  // Vibrant yellow
                        main: "#fef9c3",    // Pale yellow
                        footer: "#000000"   // Pure black
                    },
                    fontFamily: {
                        heading: ["'Playfair Display', serif"],
                        body: ["'Open Sans', sans-serif"]
                    }
                }
            }
        }
    </script>
    <link href="https://cdn.shopify.com/s/files/1/1857/6931/files/Indian-Pickle_10cc540d-27e3-4c82-b0ec-1d114a661776_600x600.jpg?v=1655543167<style>
        .hero-image {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
        }
        .product-card {
            transition: all 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body class="font-body bg-main text-gray-800">
    <!-- Yellow Header -->
    <header class="bg-header shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img src="https://cdn.shopify.com/s/files/1/1857/6931/files/Indian-Pickle_10cc540d-27e3-4c82-b0ec-1d114a661776_600x600.jpg?v=1655543167" alt="Swetha Pickles logo - traditional Indian pickle jar with yellow background" class="h-12 w-12 rounded-full object-cover border-2 border-white">
                    <h1 class="ml-3 text-2xl font-heading font-bold text-gray-800">Swetha Pickles</h1>
                </div>
                <nav class="hidden md:block">
                    <ul class="flex space-x-8">
                        <li><a href="#home" class="font-semibold text-gray-800 hover:text-white transition">Home</a></li>
                        <li><a href="#products" class="font-semibold text-gray-800 hover:text-white transition">Products</a></li>
                        <li><a href="#about" class="font-semibold text-gray-800 hover:text-white transition">About</a></li>
                        <li><a href="#contact" class="font-semibold text-gray-800 hover:text-white transition">Contact</a></li>
                    </ul>
                </nav>
                <button class="md:hidden text-gray-800">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section with Swetha Pickles name -->
    <section id="home" class="py-16 bg-main">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h2 class="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-800">Swetha Pickles and Snacks</h2>
                <p class="text-xl mb-6 text-gray-700">Authentic homemade Indian pickles & snacks</p>
                <div class="flex gap-4">
                    <a href="#products" class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition">Our Products</a>
                    <a href="#contact" class="border-2 border-header text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-header transition">Order Now</a>
                </div>
            </div>
            <div class="md:w-1/2">
                <img src="https://www.farmdidi.com/cdn/shop/articles/Blog-post-revised.webp?v=1670659916&width=1445" alt="Variety of Swetha Pickles products displayed on wooden table with spices" class="rounded-lg hero-image border-4 border-white" loading="lazy">
            </div>
        </div>
    </section>

    <!-- Products Section with food images -->
    <section id="products" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-800">Our Special Pickles</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Product 1 - Mango Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://cinnamonsnail.com/wp-content/uploads/2023/07/Mango-pickle-02.jpg" alt="Swetha's Special Mango Pickle in glass jar with spices visible" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Special Mango Pickle</h3>
                        <p class="text-gray-600 mb-4">Raw mangoes with traditional spices and mustard oil</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹250</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <!-- Product 2 - Lemon Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://www.shutterstock.com/image-photo/spicy-tangy-homemade-lemon-pickle-260nw-2316101529.jpg" alt="Swetha's Lemon Pickle with whole spices in ceramic bowl" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Tangy Lemon Pickle</h3>
                        <p class="text-gray-600 mb-4">Juicy lemons with fenugreek and chili</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹220</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <!-- Product 3 - Mixed Veg Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/divya-r20180620215346113.jpeg" alt="Swetha's Mixed Vegetable Pickle with carrots, cauliflower and lime" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Mixed Veg Pickle</h3>
                        <p class="text-gray-600 mb-4">Carrot, cauliflower, lime and mango combo</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹280</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 4 - Garlic Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNmOpJDzNs5MMuI21ELT76xZgtKqI5CR_Mg&s" alt="Swetha's Garlic Pickle with whole garlic cloves in oil" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Spicy Garlic Pickle</h3>
                        <p class="text-gray-600 mb-4">Whole garlic cloves in spicy mustard oil</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹270</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 5 - Chilli Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://cinnamonsnail.com/wp-content/uploads/2023/07/green-chili-pickle-02.jpg" alt="Swetha's Green Chilli Pickle with whole chillies" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Green Chilli Pickle</h3>
                        <p class="text-gray-600 mb-4">Spicy green chillies with tangy spices</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹230</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 6 - chekkalu and chekkaralu -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://i.ytimg.com/vi/69jkEiK3XNs/sddefault.jpg" alt="Swetha's chekkalu and chekkaralu with more care " class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">chekkalu and chekkaralu</h3>
                        <p class="text-gray-600 mb-4">roasted chekkalu and chekkaralu with delicious taste</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹230</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <!-- Product 7 - Gongura Pickle -->
                <div class="product-card bg-main rounded-lg overflow-hidden shadow-md border-2 border-header">
                    <img src="https://vellankifoods.com/cdn/shop/products/gongura_pickle_2.jpg?v=1680180278" alt="Swetha's Gongura Pickle with sorrel leaves" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <h3 class="text-xl font-heading font-bold mb-2">Gongura Pickle</h3>
                        <p class="text-gray-600 mb-4">Tangy sorrel leaves with special spices</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-800">₹290</span>
                            <button class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full transition">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 bg-main">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZTb5Yfaimh094dyw2xLSPrxYz4yLo1GGEA&s" alt="Swetha preparing pickles and snacks  in her traditional kitchen with spices" class="rounded-lg shadow-xl border-4 border-white" loading="lazy">
                    <img src="https://masalamonk.com/wp-content/uploads/2025/02/Unusual-Indian-Pickles.jpg" alt="Swetha preparing pickles and snacks  in her traditional kitchen with spices" class="rounded-lg shadow-xl border-4 border-white" loading="lazy">
                </div>
                <div class="md:w-1/2">
                    <h2 class="text-3xl font-heading font-bold mb-6 text-gray-800">About Swetha Pickles and Snacks</h2>
                    <p class="mb-4 text-lg text-gray-700">Swetha Pickles and snacks is a homegrown brand that brings you authentic Indian pickles made with traditional recipes and the finest ingredients. Our pickles are made in small batches to ensure quality and freshness.</p>
                    <p class="mb-4 text-lg text-gray-700">Every jar of Swetha Pickles is prepared with the same care and love that goes into homemade pickles and snacks , using recipes perfected over generations in our family.</p>
                    <p class="text-lg text-gray-700">We use no artificial preservatives - just natural ingredients and traditional methods to create flavors that remind you of your grandmother's kitchen.</p>
                    
                    <div class="mt-8 bg-white p-6 rounded-lg shadow-sm border-l-4 border-header">
                        <h3 class="text-xl font-heading font-bold mb-3 text-gray-800">Our Process</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>Hand-selected fresh ingredients</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>Traditional sun-drying methods</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>Small batch preparation</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-header mt-1 mr-2"></i>
                                <span>No artificial preservatives</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-main p-6 rounded-lg border-2 border-header">
                    <div class="flex items-center mb-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3MgYXl7l8_5v3hgfkgmYmcZE2zrl4WTk6A&s" alt="Tasty Tradition" class="w-12 h-12 rounded-full object-cover border-2 border-white">>
                        <div class="ml-3">
                            <h4 class="font-bold">Ramesh Kumar</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-700">"The mango pickle tastes just like my mother used to make. Authentic flavor and perfect spice level!"</p>
                </div>
                
                <!-- Testimonial 2 -->
                <div class="bg-main p-6 rounded-lg border-2 border-header">
                    <div class="flex items-center mb-4">
                        <img src="https://photosmint.com/wp-content/uploads/2025/03/Indian-Beauty-DP.jpeg" alt="Customer Priya Sharma" class="w-12 h-12 rounded-full object-cover border-2 border-white">
                        <div class="ml-3">
                            <h4 class="font-bold">Priya Sharma</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-700">"The lemon pickle is my favorite! Tangy and spicy, perfect with curd rice. Will order again!"</p>
                </div>
                
                <!-- Testimonial 3 -->
                <div class="bg-main p-6 rounded-lg border-2 border-header">
                    <div class="flex items-center mb-4">
                        <img src="https://i.pinimg.com/736x/48/5a/01/485a0101007cd39acfb3fbeeefcc1075.jpg" alt="Customer Arjun Patel" class="w-12 h-12 rounded-full object-cover border-2 border-white">
                        <div class="ml-3">
                            <h4 class="font-bold">Arjun Patel</h4>
                            <div class="flex text-yellow-400">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-700">"Received my order quickly and packaging was excellent. The mixed veg pickle is amazing with rotis!"</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-heading font-bold text-center mb-12 text-gray-800">Order Swetha Pickles and Snacks</h2>
            
            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/2">
                    <form class="space-y-4">
                        <div>
                            <label for="name" class="block text-gray-700 mb-2">Your Name</label>
                            <input type="text" id="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header">
                        </div>
                        <div>
                            <label for="phone" class="block text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" id="phone" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header">
                        </div>
                        <div>
                            <label for="address" class="block text-gray-700 mb-2">Delivery Address</label>
                            <textarea id="address" rows="2" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header"></textarea>
                        </div>
                        <div>
                            <label for="order" class="block text-gray-700 mb-2">Your Order</label>
                            <textarea id="order" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-header" placeholder="Which pickles would you like to order? Please mention quantities."></textarea>
                        </div>
                        <button type="submit" class="bg-header hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition">Place Order</button>
                    </form>
                </div>
                <div class="md:w-1/2 bg-main p-8 rounded-lg border-2 border-header">
                    <h3 class="text-xl font-heading font-bold mb-4 text-gray-800">Contact Details</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <i class="fas fa-map-marker-alt text-gray-800 mt-1 mr-3"></i>
                            <p>123 Pickle Street, Foodie Town, Hyderabad, India - 500001</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-phone-alt text-gray-800 mr-3"></i>
                            <p>+91 98765 43210</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-envelope text-gray-800 mr-3"></i>
                            <p>orders@swethapickles.com</p>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-clock text-gray-800 mr-3"></i>
                            <p>Monday-Saturday: 9AM - 6PM</p>
                        </div>
                    </div>
                    
                    <h3 class="text-xl font-heading font-bold mt-8 mb-4 text-gray-800">Follow Swetha Pickles</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-800 hover:text-pink-600 text-2xl"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-800 hover:text-blue-600 text-2xl"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-gray-800 hover:text-green-600 text-2xl"><i class="fab fa-whatsapp"></i></a>
                    </div>

                    <div class="mt-8">
                        <img src="https://m.media-amazon.com/images/I/61q7h-mZ1AL.UF1000,1000_QL80.jpg" alt="Swetha Pickles products gift pack" class="rounded-lg border-2 border-white">
                        <p class="mt-2 text-sm text-gray-200">Perfect gift packs available for festivals and special occasions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Black Footer -->
    <footer class="bg-footer text-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-xl font-heading font-bold">Swetha Pickles</h3>
                    <p class="text-gray-400">Authentic homemade Indian pickles</p>
                </div>
                <div class="text-center md:text-right">
                    <p class="text-gray-400">&copy; 2023 Swetha Pickles. All rights reserved.</p>
                    <p class="text-gray-400">Made with <i class="fas fa-heart text-red-400"></i> in India</p>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.querySelector('.md\\:hidden');
            const navMenu = document.querySelector('nav ul');
            
            mobileMenuButton.addEventListener('click', function() {
                navMenu.classList.toggle('hidden');
                navMenu.classList.toggle('flex');
                navMenu.classList.toggle('flex-col');
                navMenu.classList.toggle('absolute');
                navMenu.classList.toggle('bg-header');
                navMenu.classList.toggle('w-full');
                navMenu.classList.toggle('left-0');
                navMenu.classList.toggle('top-16');
                navMenu.classList.toggle('p-4');
                navMenu.classList.toggle('space-y-4');
                navMenu.classList.toggle('space-x-8');
                navMenu.classList.toggle('shadow-md');
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    if(this.getAttribute('href') === '#') return;
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });
    </script> 
</body>
>>>>>>> 2a124789b7b965b578776033041e0f51cc311e35
</html>