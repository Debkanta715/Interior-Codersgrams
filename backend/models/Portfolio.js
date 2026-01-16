import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  beforeAfter: {
    before: String,
    after: String
  },
  location: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    trim: true
  },
  duration: {
    type: String,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
