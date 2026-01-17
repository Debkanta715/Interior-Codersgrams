import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Import routes
import designRoutes from './routes/designs.js';
import userRoutes from './routes/userRoutes.js';
import contactRoutes from './routes/contact.js';
import portfolioRoutes from './routes/portfolio.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/interior-company')
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => {
    console.warn('⚠ MongoDB connection error:', err.message);
    console.warn('⚠ Running in offline mode - data will not persist');
  });

// Routes
app.use('/api/designs', designRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/portfolio', portfolioRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
