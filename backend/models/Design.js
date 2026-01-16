import mongoose from 'mongoose';

const designSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['Wall Colour Combination', 'Living Room', 'Modular Kitchen', 'Wardrobe', 'Master Bedroom', 'Kids Room', 'Kitchen Wall Tiles'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
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

const Design = mongoose.model('Design', designSchema);
export default Design;
