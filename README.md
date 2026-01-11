# Maksan Full-Stack E-Commerce Application

A modern full-stack e-commerce platform built with React, Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Product Management**: Add, edit, delete, and list products
- **Shopping Cart**: Add items to cart, update quantities, and checkout
- **Order Management**: Place orders, view order history, and manage order status
- **Admin Panel**: Dedicated admin interface for managing products, orders, and users
- **Image Upload**: Cloudinary integration for product image uploads
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user feedback

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Cloudinary for image storage
- Multer for file uploads

### Admin Panel
- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd maksan-full-stack
   ```

2. **Install dependencies for each part**

   **Backend:**
   ```bash
   cd backend
   npm install
   ```

   **Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

   **Admin:**
   ```bash
   cd ../admin
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the `backend` directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   ```

4. **Start MongoDB**

   Make sure MongoDB is running on your system or use a cloud MongoDB service like MongoDB Atlas.

5. **Run the applications**

   **Backend:**
   ```bash
   cd backend
   npm start
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

   **Admin:**
   ```bash
   cd admin
   npm run dev
   ```

6. **Access the applications**

   - Frontend: http://localhost:5173 (or the port shown by Vite)
   - Admin: http://localhost:5174 (or the port shown by Vite)
   - Backend API: http://localhost:4000 (assuming default port)

## Project Structure

```
maksan-full-stack/
├── admin/          # Admin panel React app
├── backend/        # Node.js/Express API server
│   ├── config/     # Database and cloudinary config
│   ├── controllers/# Business logic controllers
│   ├── middleware/ # Authentication and file upload middleware
│   ├── models/     # MongoDB schemas
│   ├── routes/     # API routes
│   └── server.js   # Main server file
└── frontend/       # Customer-facing React app
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── context/     # React context for state management
    │   ├── pages/       # Page components
    │   └── assets/      # Static assets
```

## API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Products
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (admin)
- `POST /api/product/remove` - Remove product (admin)
- `POST /api/product/single` - Get single product

### Cart
- `POST /api/cart/get` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart item

### Orders
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (admin)
- `POST /api/order/status` - Update order status (admin)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.