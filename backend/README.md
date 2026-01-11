# Maksan Backend API

The backend API server for the Maksan e-commerce platform, built with Node.js, Express, and MongoDB.

## Overview

This is the RESTful API that powers the entire e-commerce platform. It handles user authentication, product management, shopping cart operations, order processing, and payment integration. The API serves both the customer frontend and admin panel applications.

## Features

- **User Management**: Registration, authentication, and user profiles
- **Product Management**: CRUD operations for products with image uploads
- **Shopping Cart**: Add, update, and remove cart items
- **Order Processing**: Place orders, payment integration, order tracking
- **Admin Functions**: Administrative controls for managing the platform
- **Image Storage**: Cloudinary integration for product images
- **Payment Gateway**: Integration with Razorpay and Stripe
- **Security**: JWT authentication and password hashing

## Tech Stack

- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **File Uploads**: Multer
- **Image Storage**: Cloudinary
- **Payment Processing**: Razorpay and Stripe
- **Validation**: Validator.js
- **CORS**: Cross-origin resource sharing
- **Environment**: dotenv for configuration

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Setup

Create a `.env` file in the backend root directory with the following variables:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Usage

1. Ensure MongoDB is running (local or cloud instance)

2. Start the server:
   ```bash
   npm start
   ```

3. The API will be available at `http://localhost:4000`

4. Test the API:
   ```bash
   curl http://localhost:4000
   # Should return: "API Working"
   ```

## Available Scripts

- `npm start` - Start the production server
- `npm run server` - Alternative server start command

## API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /admin` - Admin login

### Product Routes (`/api/product`)
- `GET /list` - Get all products
- `POST /add` - Add new product (admin)
- `POST /remove` - Remove product (admin)
- `POST /single` - Get single product details

### Cart Routes (`/api/cart`)
- `POST /get` - Get user's cart
- `POST /add` - Add item to cart
- `POST /update` - Update cart item quantity

### Order Routes (`/api/order`)
- `POST /place` - Place new order
- `POST /verify` - Verify payment
- `POST /userorders` - Get user's orders
- `GET /list` - Get all orders (admin)
- `POST /status` - Update order status (admin)

## Project Structure

```
backend/
├── config/
│   ├── cloudinary.js     # Cloudinary configuration
│   └── mongodb.js        # MongoDB connection
├── controllers/
│   ├── cartController.js     # Cart operations
│   ├── orderController.js    # Order management
│   ├── productController.js  # Product CRUD
│   └── userController.js     # User authentication
├── middleware/
│   ├── adminAuth.js      # Admin authentication middleware
│   ├── auth.js           # User authentication middleware
│   └── multer.js         # File upload configuration
├── models/
│   ├── orderModel.js     # Order schema
│   ├── productModel.js   # Product schema
│   └── userModel.js      # User schema
├── routes/
│   ├── cartRoute.js      # Cart API routes
│   ├── orderRoute.js     # Order API routes
│   ├── productRoute.js   # Product API routes
│   └── userRoute.js      # User API routes
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── package.json         # Dependencies and scripts
├── server.js            # Main application entry point
└── vercel.json          # Vercel deployment config
```

## Database Models

### User Model
- Personal information (name, email, password)
- Authentication tokens
- Cart data
- Order history

### Product Model
- Basic info (name, description, price, category)
- Image URLs
- Stock information
- Sizes/colors (if applicable)

### Order Model
- Order details (items, amounts, addresses)
- Payment information
- Order status tracking
- User association

## Authentication

The API uses JWT (JSON Web Tokens) for authentication:

- **User Authentication**: Required for cart operations and order placement
- **Admin Authentication**: Required for product management and order administration
- **Token Storage**: Tokens are stored client-side and sent with API requests

## File Uploads

Product images are handled through:
- **Multer**: Middleware for handling multipart/form-data
- **Cloudinary**: Cloud storage for image optimization and delivery

## Payment Integration

Supports multiple payment gateways:
- **Razorpay**: Indian payment gateway
- **Stripe**: International payment processing

## Error Handling

The API includes comprehensive error handling:
- Input validation using validator.js
- Proper HTTP status codes
- Descriptive error messages
- Database connection error handling

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- CORS configuration for cross-origin requests
- Input validation and sanitization
- Secure environment variable management

## Contributing

When working with the backend API:

1. Follow RESTful API conventions
2. Use proper HTTP status codes
3. Implement input validation
4. Handle errors gracefully
5. Write clear, documented code
6. Test all endpoints thoroughly

## Deployment

The backend is configured for deployment on Vercel with the included `vercel.json` configuration file.

## Related

- [Main Project README](../README.md)
- [Frontend Application](../frontend/README.md)
- [Admin Panel](../admin/README.md)