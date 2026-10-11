require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./model/User');
const Product = require('./model/Product');
const Order = require('./model/Order');

const demoUsers = [
  {
    name: 'Demo Admin',
    email: 'admin@shoppie.gmail',
    password: 'Admin@12345',
    role: 'admin',
    verified: true,
  },
  {
    name: 'Demo Customer',
    email: 'customer@shoppie.test',
    password: 'Customer@12345',
    role: 'user',
    verified: true,
  },
];

const demoProducts = [
  {
    name: 'Classic Cotton T-Shirt',
    description: 'Comfortable everyday cotton t-shirt.',
    price: 24.99,
    category: 'Clothing',
    stock: 50,
    imageUrl: 'https://placehold.co/600x600/png?text=Cotton+T-Shirt',
  },
  {
    name: 'Wireless Headphones',
    description: 'Bluetooth headphones with a comfortable over-ear design.',
    price: 79.99,
    category: 'Electronics',
    stock: 25,
    imageUrl: 'https://placehold.co/600x600/png?text=Headphones',
  },
  {
    name: 'Everyday Backpack',
    description: 'Lightweight backpack for work, travel, and study.',
    price: 44.99,
    category: 'Accessories',
    stock: 30,
    imageUrl: 'https://placehold.co/600x600/png?text=Backpack',
  },
];

const seedDatabase = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');

  const users = {};
  for (const userData of demoUsers) {
    const password = await bcrypt.hash(userData.password, 10);
    const user = await User.findOneAndUpdate(
      { email: userData.email },
      { ...userData, password },
      { returnDocument: 'after', upsert: true, setDefaultsOnInsert: true }
    );
    users[userData.email] = user;
  }

  const products = [];
  for (const productData of demoProducts) {
    const product = await Product.findOneAndUpdate(
      { name: productData.name },
      productData,
      { returnDocument: 'after', upsert: true, setDefaultsOnInsert: true }
    );
    products.push(product);
  }

  const existingOrder = await Order.findOne({ paymentId: 'seed-demo-order-001' });
  if (!existingOrder) {
    const customer = users['customer@shoppie.test'];
    const items = [
      { productId: products[0]._id, qty: 2, price: products[0].price },
      { productId: products[1]._id, qty: 1, price: products[1].price },
    ];

    await Order.create({
      userId: customer._id,
      items,
      totalAmount: items.reduce((total, item) => total + item.qty * item.price, 0),
      address: {
        fullName: customer.name,
        street: '123 Demo Street',
        city: 'Demo City',
        postalCode: '400001',
        country: 'India',
      },
      paymentId: 'seed-demo-order-001',
      status: 'Delivered',
    });
  }

  console.log('Seed completed successfully');
  console.log('Admin login: admin@shoppie.test / Admin@12345');
  console.log('Customer login: customer@shoppie.test / Customer@12345');
};

seedDatabase()
  .catch((error) => {
    console.error('Seed failed:', error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
  