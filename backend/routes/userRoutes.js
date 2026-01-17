import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();

//Test Route
router.get("/test", async (req, res) => {
  res.status(200).json({ message: "User Route is Working" });
});

//Register
router.post("/register", registerUser);

//Login
router.post("/login", loginUser);

// Get user profile
router.get("/profile", protect, getProfile);

// Update user profile
router.put("/profile", protect, updateProfile);

export default router;
