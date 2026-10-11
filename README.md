# Shoppie - MERN E-Commerce Application

## Project Overview

**Shoppie** is a full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a complete shopping experience with product browsing, user authentication, shopping cart functionality, order management, and an admin dashboard for store management.

## Features

### Customer Features
- **User Authentication**: Secure registration and login with JWT token-based auth
- **Product Catalog**: Browse and search products with detailed product pages
- **Shopping Cart**: Add/remove items, manage quantities, and persist cart state using Redux
- **Order Placement**: Checkout process with order summary and confirmation
- **Order History**: View past orders and order details in user profile
- **Reviews & Ratings**: Submit and view product reviews
- **Payment Integration**: Razorpay payment gateway integration for secure transactions
- **Wishlist**: Save favorite products for later

### Admin Features
- **Admin Dashboard**: Overview of sales, orders, and analytics
- **Product Management**: Add, edit, and delete products with image uploads
- **Order Management**: View and manage customer orders
- **User Management**: View and manage customer accounts
- **Analytics**: Sales metrics and business insights

## Technologies Used

### Frontend
- **React.js 19.3.0** - UI library for building interactive interfaces
- **Redux Toolkit** - State management for cart and authentication
- **React Router v7** - Client-side routing
- **CSS3** - Custom styling (no heavy CSS frameworks for minimal dependencies)

### Backend
- **Node.js + Express.js** - REST API server
- **MongoDB + Mongoose** - NoSQL database and ODM
- **JWT** - Secure authentication tokens
- **Bcryptjs** - Password hashing and security
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage and optimization
- **Razorpay** - Payment processing
- **Nodemailer** - Email notifications

### Development Tools
- **Nodemon** - Auto-reload during development
- **Git & GitHub** - Version control

## Project Structure

```
Shoppie/
├── Backend/
│   ├── config/
│   │   ├── db.js                 # MongoDB connection
│   │   └── cloudinary.js         # Cloudinary setup
│   ├── controller/
│   │   ├── authController.js     # Auth logic (login, register)
│   │   ├── productController.js  # Product CRUD operations
│   │   ├── orderController.js    # Order management
│   │   ├── paymentController.js  # Payment handling
│   │   └── analyticsController.js # Sales analytics
│   ├── middleware/
│   │   ├── authmiddleware.js     # JWT verification
│   │   └── adminmiddleware.js    # Admin authorization
│   ├── model/
│   │   ├── User.js               # User schema
│   │   ├── Product.js            # Product schema
│   │   ├── Order.js              # Order schema
│   │   └── Review.js             # Review schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   ├── productRoutes.js      # Product endpoints
│   │   ├── orderRoutes.js        # Order endpoints
│   │   ├── paymentRoutes.js      # Payment endpoints
│   │   ├── adminRoutes.js        # Admin endpoints
│   │   └── analyticsRoutes.js    # Analytics endpoints
│   ├── utils/
│   │   └── sendEmail.js          # Email utility
│   ├── server.js                 # Express app setup
│   ├── index.js                  # Server entry point
│   ├── seed.js                   # Database seeding script
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── Shoppie.png           # Logo
│   │   └── Aryanimage.png        # Brand image
│   ├── src/
│   │   ├── admin/
│   │   │   ├── AdminDashboard.jsx    # Admin home
│   │   │   ├── AdminProducts.jsx     # Product management
│   │   │   ├── AdminOrders.jsx       # Order management
│   │   │   ├── AdminUsers.jsx        # User management
│   │   │   ├── AddProduct.jsx        # Add new product
│   │   │   └── EditProducts.jsx      # Edit product
│   │   ├── pages/
│   │   │   ├── home.jsx              # Landing page
│   │   │   ├── Shop.jsx              # Product listing
│   │   │   ├── ProductDetail.jsx     # Single product page
│   │   │   ├── Cart.jsx              # Shopping cart
│   │   │   ├── Checkout.jsx          # Checkout flow
│   │   │   ├── OrderSuccess.jsx      # Order confirmation
│   │   │   ├── Login.jsx             # User login
│   │   │   ├── Register.jsx          # User registration
│   │   │   ├── Profile.jsx           # User profile
│   │   │   ├── About.jsx             # About page
│   │   │   ├── Disclaimer.jsx        # Disclaimer page
│   │   │   └── ReturnPolicy.jsx      # Return policy
│   │   ├── components/
│   │   │   ├── Navbar.jsx            # Top navigation
│   │   │   ├── Footer.jsx            # Footer
│   │   │   └── ProductCard.jsx       # Product display card
│   │   ├── context/
│   │   │   └── AuthContext.jsx       # Auth context provider
│   │   ├── redux/
│   │   │   ├── store.js              # Redux store setup
│   │   │   └── cartSlice.js          # Cart state management
│   │   ├── lib/
│   │   │   └── api.js                # API client
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── navbar.css
│   │   │   ├── auth.css
│   │   │   ├── product.css
│   │   │   ├── cart.css
│   │   │   └── about.css
│   │   ├── App.jsx                   # Main app component
│   │   └── index.js                  # React entry point
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

## Setup and Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud)
- Cloudinary account (for image storage)
- Razorpay account (for payments)

### Backend Setup

1. **Navigate to Backend directory**:
   ```bash
   cd Backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env` file** (use `.env.example` as template):
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   ```

4. **Seed the database** (optional):
   ```bash
   npm run seed
   ```

5. **Start the server**:
   ```bash
   npm run dev    # Development mode with auto-reload
   npm start      # Production mode
   ```

The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

### Full Stack Startup

From the root directory:
```bash
# Terminal 1: Backend
cd Backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm start
```

## Running the Application

### Development Environment
```bash
# Backend: Auto-reloads on file changes
npm run dev

# Frontend: Hot reload with React dev server
npm start
```

### Production Build
```bash
# Frontend build
cd frontend
npm run build

# Serve built frontend and run backend
cd ../Backend
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Payments
- `POST /api/payment/checkout` - Initialize Razorpay payment
- `POST /api/payment/verify` - Verify payment

### Admin
- `GET /api/admin/dashboard` - Dashboard metrics
- `GET /api/admin/users` - List all users
- `GET /api/admin/orders` - List all orders

## AI Development Tool Usage - Kiro

This project was developed using **Kiro**, an AI-powered development environment integrated with VS Code. Kiro significantly accelerated the development process through intelligent code generation, debugging, and architectural guidance.

### How Kiro Was Used

Kiro was instrumental in the following aspects of Shoppie's development:

#### 1. **Backend API Development**
Kiro helped design and implement RESTful API endpoints with proper error handling and validation. For the payment integration with Razorpay, Kiro generated the controller logic including:
- Payment verification middleware
- Webhook handling for payment callbacks
- Order status updates based on payment success/failure

**Specific Task**: Created `paymentController.js` with complete Razorpay integration, including secure payment verification and error handling patterns.

#### 2. **MongoDB Schema Design and Mongoose Models**
Kiro assisted in designing MongoDB schemas following best practices for e-commerce data structures. It generated:
- User model with password hashing hooks
- Product model with validation rules and indexing
- Order model with nested items and payment tracking
- Review model with rating constraints

**Specific Task**: Built all four core models (`User.js`, `Product.js`, `Order.js`, `Review.js`) with proper validation, relationships, and Mongoose hooks for data integrity.

#### 3. **Authentication & Authorization Middleware**
Kiro created secure JWT-based authentication middleware and admin authorization checks:
- JWT token generation and verification
- Role-based access control (RBAC)
- Protected route decorators
- Token refresh logic

**Specific Task**: Implemented `authmiddleware.js` and `adminmiddleware.js` with proper error handling and security best practices.

#### 4. **React Component Development**
Kiro generated reusable React components with proper state management:
- Form components with validation (Login, Register, Checkout)
- Product display components with image optimization
- Admin dashboard with data tables
- Shopping cart integration with Redux

**Specific Task**: Built `ProductCard.jsx`, admin components (`AddProduct.jsx`, `EditProducts.jsx`), and form-based pages with proper React hooks and state handling.

#### 5. **Redux Store Configuration & Cart State Management**
Kiro set up Redux Toolkit for global state management:
- Cart slice with add/remove/update item logic
- Async thunks for API calls
- Selectors for efficient component rendering
- Persistence middleware configuration

**Specific Task**: Created `cartSlice.js` and `store.js` with complete cart operations (add, remove, update quantity, clear cart) and Redux integration.

#### 6. **Debugging and Bug Fixes**
Kiro identified and fixed several issues:
- CORS configuration problems between frontend and backend
- MongoDB connection timeout issues
- JWT token expiration handling in API calls
- Image upload path corrections for Cloudinary

**Specific Task**: Debugged and resolved the Razorpay payment flow integration, ensuring proper error messages and payment status updates.

#### 7. **Frontend API Integration**
Kiro created a centralized API client (`lib/api.js`) with:
- Axios instance configuration
- Automatic JWT token attachment
- Error handling and response interceptors
- Base URL management for different environments

**Specific Task**: Built the API client layer that handles all HTTP requests with proper authentication headers and error handling.

### Key Advantages of Using Kiro

1. **Rapid Prototyping**: Generated complete feature scaffolds in seconds
2. **Best Practices**: Incorporated security patterns (bcrypt, JWT, CORS) automatically
3. **Error Recovery**: Quickly identified and fixed issues in real-time
4. **Code Quality**: Maintained consistent coding patterns across the project
5. **Learning**: Provided explanations for complex concepts (Redux, JWT, etc.)
6. **Time Efficiency**: Reduced development time significantly, allowing focus on architecture and testing

## Project Statistics

- **Backend Files**: 18 (controllers, models, routes, middleware)
- **Frontend Components**: 15+ React components
- **Database Models**: 4 (User, Product, Order, Review)
- **API Endpoints**: 15+ endpoints
- **Lines of Code**: ~2,500+ lines

## Database Schema Overview

### User Schema
```javascript
{
  name, email, password (hashed), phone,
  address, role (user/admin),
  cart, orders, reviews,
  createdAt, updatedAt
}
```

### Product Schema
```javascript
{
  name, description, category, price,
  images, stock, ratings, reviews,
  seller, createdAt, updatedAt
}
```

### Order Schema
```javascript
{
  user, items, totalPrice, totalQuantity,
  shippingAddress, paymentStatus, orderStatus,
  paymentMethod, razorpayOrderId, createdAt, updatedAt
}
```

### Review Schema
```javascript
{
  product, user, rating, comment,
  createdAt
}
```

## Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT-based authentication
- ✅ Admin role verification
- ✅ Protected API routes
- ✅ CORS configuration
- ✅ Environment variables for secrets
- ✅ Payment verification with Razorpay webhooks

## Future Enhancements

- [ ] Search and filtering optimization
- [ ] Product recommendations engine
- [ ] Email notifications for orders
- [ ] Inventory management improvements
- [ ] Customer review moderation
- [ ] Analytics dashboard improvements
- [ ] Mobile app with React Native
- [ ] Wishlist functionality
- [ ] Advanced user profiles
- [ ] Multi-language support

## Contributing

This is a portfolio project. Feel free to fork and build upon it!

## License

ISC

## Author

**Aryan** - Full Stack Developer

## Contact & Support

For questions or issues, please create an issue on the GitHub repository.

---

## AI Development Tool: Kiro - Summary

**Tool Used**: [Kiro](https://app.kiro.de/)

Kiro proved to be an invaluable partner in developing Shoppie. Its ability to understand requirements, generate production-ready code, and provide real-time debugging support made it possible to build a fully functional MERN application with proper architecture and best practices. The combination of AI-assisted development with careful code review and testing ensured high-quality deliverables.

**Key Takeaway**: Modern AI development tools like Kiro are not replacements for developers—they're force multipliers that handle boilerplate and repetitive tasks, freeing developers to focus on architecture, problem-solving, and ensuring code quality.

---

**Repository**: https://github.com/Aryan-del-07/Shoppie
**Last Updated**: October 2026
