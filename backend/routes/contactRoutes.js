import express from "express";
import { protect, adminMiddleware } from "../middleware/authMiddleware.js";
import {
  testContact,
  submitContact,
  getAllMessages,
  getMessageById,
  updateMessageStatus,
} from "../controllers/contactController.js";

const router = express.Router();

// Test Route
router.get("/test", testContact);

// Submit contact form
router.post("/submit", submitContact);

// Get all messages (admin only)
router.get("/messages", protect, adminMiddleware, getAllMessages);

// Get specific message
router.get("/message/:id", protect, adminMiddleware, getMessageById);

// Update message status
router.put("/message/:id", protect, adminMiddleware, updateMessageStatus);

export default router;
