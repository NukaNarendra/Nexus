# Nexus - Setup & Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download Community Edition](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager

## Step 1: Clone or Extract the Project

Extract the project files to your desired location.

## Step 2: Install Dependencies

### Backend Setup

```bash
cd backend
npm install
```

### Frontend Setup

```bash
cd frontend
npm install
```

## Step 3: Configure Environment Variables

### Backend Configuration

Create/Update the `.env` file in the `backend` directory:

```
MONGODB_URL=mongodb://localhost:27017/nexus
PORT=4000
```

**Note:** Make sure MongoDB is running locally on port 27017, or update the connection string accordingly.

### Frontend Configuration

The `.env` file in the `frontend` directory should contain:

```
VITE_API_BASE_URL=http://localhost:4000
```

## Step 4: Start MongoDB

Make sure MongoDB is running:

```bash
# On Windows (if MongoDB is installed as a service)
# MongoDB should start automatically

# Or manually start MongoDB:
mongod
```

## Step 5: Run the Application

### Start Backend Server

```bash
cd backend
npm run dev
```

Expected output:
```
Server is running on port 4000
mongoDB connected successfully
```

### Start Frontend Development Server (in a new terminal)

```bash
cd frontend
npm run dev
```

Expected output:
```
  VITE v8.1.1  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

## Step 6: Access the Application

Open your browser and navigate to:
```
http://localhost:5173/
```

## Features Available

Once the application is running, you can:

- ✅ **Manage Users**
  - Create new users
  - View user list and details
  - Edit user information
  - Delete users

- ✅ **Manage Products**
  - Create new products
  - View product list and details
  - Edit product information
  - Delete products

- ✅ **Manage Orders**
  - Create new orders (select users and products)
  - View order list and details
  - Edit order information
  - Delete orders
  - Track order status (pending, confirmed, shipped, delivered, cancelled)

- ✅ **Dashboard**
  - View summary cards for total users, products, and orders
  - Search and filter capabilities

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB service is running
- Check if the connection string in `.env` is correct
- Verify MongoDB is listening on port 27017

### Port Already in Use
- Backend: Change `PORT` in `.env` (e.g., `PORT=5000`)
- Frontend: The dev server will automatically use the next available port

### Module Not Found Errors
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

### CORS Errors
- Ensure backend is running on `http://localhost:4000`
- Check the `VITE_API_BASE_URL` in frontend `.env`

## Production Build

### Frontend Build

```bash
cd frontend
npm run build
```

The build output will be in `frontend/dist/`

### Backend Deployment

For production, you should:
1. Use a production MongoDB instance (Atlas, etc.)
2. Update environment variables
3. Use a process manager like PM2
4. Deploy to a hosting service (Heroku, Railway, Render, etc.)

## Additional Commands

### Linting

```bash
cd frontend
npm run lint
```

### Preview Built Frontend

```bash
cd frontend
npm run preview
```

## Project Structure

```
mernexus-admin-dashboard/
├── backend/
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── controllers/   # Request handlers
│   │   ├── model/         # Mongoose schemas
│   │   ├── routes/        # API routes
│   │   └── app.js         # Express app setup
│   ├── server.js          # Server entry point
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service calls
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── vite.config.js
│   ├── package.json
│   └── .env
└── README.md
```

## API Endpoints

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Orders
- `GET /orders` - Get all orders
- `GET /orders/:id` - Get order by ID
- `POST /orders` - Create order
- `PUT /orders/:id` - Update order
- `DELETE /orders/:id` - Delete order

## Support

For issues or questions, please refer to the backend and frontend README files in their respective directories.
