# 🚀 Quick Start Guide

Get Nexus Admin Dashboard running in 5 minutes!

## Step 1: Prerequisites Check ✅

Make sure you have installed:
- ✅ Node.js (v16+): https://nodejs.org/
- ✅ MongoDB: https://www.mongodb.com/try/download/community
- ✅ A terminal/command prompt

## Step 2: Verify MongoDB is Running

Open a new terminal and run:
```bash
mongod
```

You should see output like:
```
[mongod] Waiting for connections on port 27017
```

**Keep this terminal open while running the application.**

## Step 3: Start Backend (Terminal 2)

Open a new terminal and run:
```bash
cd backend
npm install
npm run dev
```

You should see:
```
Server is running: 4000
mongoDB connected successfully
```

**Keep this terminal open.**

## Step 4: Start Frontend (Terminal 3)

Open a new terminal and run:
```bash
cd frontend
npm install
npm run dev
```

You should see:
```
VITE v8.1.1  ready in XXX ms
  ➜  Local:   http://localhost:5173/
```

## Step 5: Open in Browser

Click or navigate to:
```
http://localhost:5173/
```

✅ **You're all set! The dashboard is now running.**

---

## 📋 What You Can Do

### Users
- **Create**: Click "Users" → "Create" button
- **View**: Click on any user in the list
- **Edit**: Click the pencil icon on a user card
- **Delete**: Click the trash icon (with confirmation)

### Products
- **Create**: Click "Products" → "Create" button
- **View**: Click on any product
- **Edit**: Click the pencil icon
- **Delete**: Click the trash icon

### Orders
- **Create**: Click "Orders" → "Create" button
- **Select Users & Products**: Choose from dropdowns
- **Track Status**: View order status (pending, confirmed, shipped, delivered, cancelled)
- **Delete**: Use the trash icon to remove orders

### Dashboard
- View summary cards with total counts
- Navigate between sections using the navbar

---

## 🛑 Common Issues

### ❌ "MongoDB connection failed"
- Ensure MongoDB service is running (Step 2)
- On Windows, MongoDB should auto-start, or run `mongod` manually

### ❌ "Port 4000 already in use"
- Change backend PORT in `backend/.env`:
  ```
  PORT=5000
  ```
- Update frontend API URL in `frontend/.env`:
  ```
  VITE_API_BASE_URL=http://localhost:5000
  ```

### ❌ "Module not found"
- Delete `node_modules` folder:
  ```bash
  rm -r node_modules  # or delete manually
  ```
- Run `npm install` again

### ❌ "Cannot GET /users" (in browser)
- Backend is not running - ensure Terminal 2 shows "Server is running"
- Frontend and backend ports match in `.env` files

---

## 📚 Full Documentation

For detailed setup and troubleshooting, see:
- [SETUP.md](./SETUP.md) - Complete setup guide
- [README.md](./README.md) - Project overview
- [backend/README.md](./backend/README.md) - Backend documentation
- [frontend/README.md](./frontend/README.md) - Frontend documentation

---

## 🎯 Terminal Layout (Recommended)

Arrange your terminals like this for easy monitoring:

```
┌─────────────────────────────────────┬──────────────────────────────────┐
│  Terminal 1: MongoDB               │  Terminal 2: Backend Dev Server  │
│  $ mongod                           │  $ cd backend                    │
│  Waiting for connections...         │  $ npm run dev                   │
│                                     │  Server is running: 4000         │
├─────────────────────────────────────┼──────────────────────────────────┤
│  Terminal 3: Frontend Dev Server                                       │
│  $ cd frontend                                                         │
│  $ npm run dev                                                         │
│  Local: http://localhost:5173/                                        │
│                                                                        │
│  Browser: http://localhost:5173/  ← Open here! ✅                     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 💡 Pro Tips

1. **Keep all 3 terminals running** - MongoDB, Backend, and Frontend must all be active
2. **Check console errors** - If something doesn't work, check the browser console (F12) and terminal output
3. **Hot reload works** - Changes to code automatically refresh in the browser
4. **Use test data** - Create a few users and products first, then create orders linking them

---

## ✨ Ready to code?

Make changes to any files and see them instantly in your browser. The frontend uses Vite for fast refresh, and the backend uses nodemon for auto-restart.

**Happy building! 🎉**
