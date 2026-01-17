# Interior Company Backend

Backend API for the Interior Company website clone built with Express.js and MongoDB.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Backend](#running-the-backend)
- [Environment Configuration](#environment-configuration)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Features](#features)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - Local MongoDB instance running on `mongodb://localhost:27017`
  - MongoDB Atlas cloud database (recommended)
- **npm** (comes with Node.js)

## Installation & Setup

### Step 1: Install Dependencies

Navigate to the backend directory and install all required packages:

```bash
cd backend
npm install
```

This will install:

- **express** - Web framework
- **mongoose** - MongoDB object modeling
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **jsonwebtoken** - JWT authentication
- **bcrypt/bcryptjs** - Password hashing
- **multer** - File upload handling
- **nodemon** - Development auto-reload (devDependency)

### Step 2: Create Environment Configuration

Create a `.env` file in the backend directory:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

### Step 3: Configure Environment Variables

Edit the `.env` file with your settings:

```env
# MongoDB Connection URI
MONGODB_URI=mongodb://localhost:27017/interior-company

# For MongoDB Atlas (cloud):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/interior-company?retryWrites=true&w=majority

# Server Port
PORT=5000

# JWT Secret (for authentication)
JWT_SECRET=your_secret_key_here

# Other configurations as needed
NODE_ENV=development
```

## Running the Backend

### Development Mode (with auto-reload)

```bash
npm run dev
```

- Uses **nodemon** for automatic server restart on file changes
- Perfect for development and debugging
- Server runs on `http://localhost:5000`

### Production Mode

```bash
npm start
```

- Runs the server without auto-reload
- More stable for production environments
- Server runs on `http://localhost:5000`

### Verify Server is Running

Test the health check endpoint:

```bash
curl http://localhost:5000/api/health
```

Expected response:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Complete Startup Process

**Option 1: From Project Root (Recommended)**

```bash
# Navigate to backend directory
cd backend

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

**Option 2: Windows Command Prompt**

```cmd
cd backend
npm install
npm run dev
```

**Option 3: Using nodemon directly (if installed globally)**

```bash
nodemon server.js
```

## Environment Configuration

### Required Environment Variables

| Variable      | Default                                      | Description                               |
| ------------- | -------------------------------------------- | ----------------------------------------- |
| `MONGODB_URI` | `mongodb://localhost:27017/interior-company` | MongoDB connection string                 |
| `PORT`        | `5000`                                       | Server port                               |
| `NODE_ENV`    | `development`                                | Environment type (development/production) |
| `JWT_SECRET`  | -                                            | Secret key for JWT token signing          |

### MongoDB Connection Modes

- **Local MongoDB**: Ensure MongoDB service is running locally
- **MongoDB Atlas**: Use connection string from your cluster settings
- **Offline Mode**: If MongoDB is unavailable, API will log a warning but still run

## API Endpoints

### Base URL

```
http://localhost:5000/api
```

### Designs

- `GET /designs` - Get all design ideas
- `GET /designs/:id` - Get specific design by ID
- `POST /designs` - Create new design (admin only)
- `PUT /designs/:id` - Update design (admin only)
- `DELETE /designs/:id` - Delete design (admin only)

### Users

- `POST /users/register` - Register new user
- `POST /users/login` - User login
- `GET /users/profile` - Get user profile (requires auth)
- `PUT /users/profile` - Update user profile (requires auth)

### Contact

- `POST /contact/submit` - Submit contact form
- `GET /contact/messages` - Get all messages (admin only)

### Portfolio

- `GET /portfolio` - Get all portfolio projects
- `GET /portfolio/:id` - Get specific portfolio project
- `POST /portfolio` - Create portfolio project (admin only)
- `PUT /portfolio/:id` - Update portfolio project (admin only)
- `DELETE /portfolio/:id` - Delete portfolio project (admin only)

### Health Check

- `GET /health` - Server health status check

## Project Structure

```
backend/
├── config/              # Configuration files
│   └── mongooseConnection.js    # MongoDB connection setup
├── controllers/         # Request handlers
│   ├── authController.js
│   └── userController.js
├── middleware/          # Custom middleware
│   └── authMiddleware.js        # JWT authentication middleware
├── models/              # MongoDB schemas
│   ├── User.js
│   ├── Design.js
│   ├── Portfolio.js
│   └── Contact.js
├── routes/              # API route definitions
│   ├── userRoutes.js
│   ├── designs.js
│   ├── portfolio.js
│   └── contact.js
├── services/            # Business logic services
├── utils/               # Utility functions
│   └── utils.js
├── server.js            # Main Express application
├── index.js             # Alternative entry point
├── package.json         # Project dependencies
└── README.md            # This file
```

## Features

- ✅ **User Authentication** - JWT-based authentication and authorization
- ✅ **Design Ideas Management** - CRUD operations for interior designs
- ✅ **Portfolio Showcase** - Display completed projects
- ✅ **Contact Form** - Customer inquiry submission
- ✅ **MongoDB Integration** - Persistent data storage
- ✅ **CORS Support** - Cross-origin requests enabled
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Security** - Password hashing and JWT tokens
- ✅ **File Upload** - Support for image uploads (multer)
- ✅ **Auto-reload** - Development mode with nodemon

## Troubleshooting

### Issue: MongoDB Connection Error

**Problem**: `MongoDB Connection Error: connect ECONNREFUSED`

**Solutions**:

1. Ensure MongoDB is running:
   ```bash
   # Windows - Check MongoDB service in Services
   # Mac: brew services start mongodb-community
   # Linux: sudo systemctl start mongod
   ```
2. Verify `MONGODB_URI` in `.env` is correct
3. For MongoDB Atlas, ensure:
   - Connection string is correct
   - Your IP is added to IP Whitelist
   - Network is enabled in cluster settings

### Issue: Port Already in Use

**Problem**: `Error: listen EADDRINUSE :::5000`

**Solutions**:

1. Change port in `.env`: `PORT=5001`
2. Or kill the process using port 5000:
   ```bash
   # Windows: netstat -ano | findstr :5000
   # Mac/Linux: lsof -i :5000
   ```

### Issue: Dependencies Installation Fails

**Problem**: `npm ERR! code ERESOLVE`

**Solution**:

```bash
npm install --legacy-peer-deps
```

### Issue: Nodemon Not Found

**Problem**: `nodemon: command not found`

**Solution**:

```bash
npm install -g nodemon
```

Or use `npm run dev` from the backend directory.

### Issue: .env File Not Found

**Problem**: Environment variables not loading

**Solution**:

```bash
# Create .env file in backend directory
touch .env  # Mac/Linux
type nul > .env  # Windows

# Add your environment variables
MONGODB_URI=mongodb://localhost:27017/interior-company
PORT=5000
JWT_SECRET=your_secret_key
```

## Development Tips

- Use `npm run dev` for active development to catch errors quickly
- Check server logs for database connection status
- Test endpoints using Postman, curl, or REST Client extension
- Monitor MongoDB operations using MongoDB Compass
- Keep `.env` file secure and never commit to version control
