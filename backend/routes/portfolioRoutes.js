import express from "express";
import { protect, adminMiddleware } from "../middleware/authMiddleware.js";
import {
  testPortfolio,
  getAllPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from "../controllers/portfolioController.js";

const router = express.Router();

//Test Route
router.get("/test", testPortfolio);

// Get all portfolio projects
router.get("/", getAllPortfolios);

// Get specific project
router.get("/:id", getPortfolioById);

// Create project (admin only)
router.post("/create", protect, adminMiddleware, createPortfolio);

// Update project (admin only)
router.put("/update/:id", protect, adminMiddleware, updatePortfolio);

// Delete project (admin only)
router.delete("/:id", protect, adminMiddleware, deletePortfolio);

export default router;
