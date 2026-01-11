# Maksan Admin Panel

The admin interface for the Maksan e-commerce platform, built with React and Vite.

## Overview

This is a React-based admin dashboard that allows administrators to manage products, orders, and users for the e-commerce platform. It provides a user-friendly interface for performing CRUD operations on products and managing order statuses.

## Features

- **Product Management**: Add, edit, and remove products
- **Order Management**: View and update order statuses
- **User Authentication**: Secure admin login
- **Dashboard**: Overview of key metrics and recent activities
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- React 18
- Vite (build tool)
- React Router DOM (routing)
- Axios (HTTP client)
- Tailwind CSS (styling)
- React Toastify (notifications)

## Installation

1. Navigate to the admin directory:
   ```bash
   cd admin
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

3. Log in with admin credentials to access the dashboard

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The admin panel communicates with the backend API for all data operations. Make sure the backend server is running and accessible.

## Contributing

When making changes to the admin panel:

1. Follow the existing code structure
2. Use Tailwind CSS for styling
3. Ensure responsive design
4. Test all features before committing

## Related

- [Main Project README](../README.md)
- [Backend API](../backend/README.md)
- [Frontend Application](../frontend/README.md)
