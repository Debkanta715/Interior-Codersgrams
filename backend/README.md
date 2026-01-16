# Interior Company Backend

Backend API for the Interior Company website clone.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB URI and other configurations

4. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Designs
- `GET /api/designs` - Get all design ideas
- `GET /api/designs/:id` - Get specific design
- `POST /api/designs` - Create new design (admin)
- `PUT /api/designs/:id` - Update design (admin)
- `DELETE /api/designs/:id` - Delete design (admin)

### Users
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/messages` - Get all messages (admin)

### Portfolio
- `GET /api/portfolio` - Get portfolio projects
- `GET /api/portfolio/:id` - Get specific project
- `POST /api/portfolio` - Create project (admin)

## Project Structure

```
backend/
├── models/          # Mongoose schemas
├── routes/          # API routes
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── config/          # Configuration files
├── server.js        # Main server file
└── package.json
```

## Features

- User authentication with JWT
- Design ideas management
- Portfolio showcase
- Contact form submission
- RESTful API endpoints
