import express from "express";
import Design from "../models/Design.js";
import { protect, adminMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

//Test Route
router.get("/test", async (req, res) => {
  res.status(200).json({ message: "Design Route Working" });
});

// Get all designs
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    const designs = await Design.find(query).sort({ createdAt: -1 });
    res.json(designs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specific design
router.get("/:id", async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }
    res.json(design);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create design (admin only)
router.post("/", protect, adminMiddleware, async (req, res) => {
  const { title, category, description, image } = req.body;

  try {
    if (!title || !category || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const design = new Design({
      title,
      category,
      description,
      image,
    });

    const savedDesign = await design.save();
    res.status(201).json(savedDesign);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update design (admin only)
router.put("/:id", protect, adminMiddleware, async (req, res) => {
  try {
    const design = await Design.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }

    res.json(design);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete design (admin only)
router.delete("/:id", protect, adminMiddleware, async (req, res) => {
  try {
    const design = await Design.findByIdAndDelete(req.params.id);

    if (!design) {
      return res.status(404).json({ message: "Design not found" });
    }

    res.json({ message: "Design deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
