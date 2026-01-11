# Maksan Frontend

The customer-facing React application for the Maksan e-commerce platform, built with Vite.

## Overview

This is the main frontend application that customers use to browse products, manage their shopping cart, place orders, and interact with the e-commerce platform. It provides a modern, responsive user interface for the complete shopping experience.

## Features

- **Product Browsing**: View products by category, search, and filter
- **User Authentication**: Register, login, and manage user accounts
- **Shopping Cart**: Add/remove items, update quantities
- **Checkout Process**: Secure order placement with multiple payment options
- **Order History**: View past orders and track current orders
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live cart updates and order status notifications

## Tech Stack

- React 18
- Vite (build tool and dev server)
- React Router DOM (client-side routing)
- Axios (HTTP client for API calls)
- Tailwind CSS (utility-first CSS framework)
- React Toastify (user notifications)
- Context API (state management)

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

3. The application will connect to the backend API for data

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   └── Title.jsx
│   ├── context/        # React Context for global state
│   │   └── ShopContext.jsx
│   ├── pages/          # Page components
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrder.jsx
│   │   ├── Product.jsx
│   │   └── Verify.jsx
│   ├── assets/         # Static assets and utilities
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # App entry point
├── public/             # Static files
└── index.html          # HTML template
```

## API Integration

The frontend communicates with the backend API for all data operations. Key integrations include:

- Product data fetching and display
- User authentication and session management
- Cart operations (add, update, remove)
- Order placement and history
- Payment processing

## State Management

Uses React Context API (`ShopContext`) for global state management, including:
- User authentication state
- Shopping cart data
- Product listings
- Order information

## Styling

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach with breakpoints
- **Custom Components**: Modular component design for reusability

## Contributing

When making changes to the frontend:

1. Follow React best practices and hooks patterns
2. Use Tailwind CSS classes for styling
3. Ensure components are responsive
4. Test user interactions and edge cases
5. Maintain consistent code structure

## Related

- [Main Project README](../README.md)
- [Backend API](../backend/README.md)
- [Admin Panel](../admin/README.md)
