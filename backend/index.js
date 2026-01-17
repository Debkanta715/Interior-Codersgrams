import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongooseConnection.js";
import designRoutes from "./routes/designs.js";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contact.js";
import portfolioRoutes from "./routes/portfolio.js";

dotenv.config();

// Initialize database connection
const db = await connectDB();

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/designs", designRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/portfolio", portfolioRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Internal server error", error: err.message });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`API Health: http://localhost:${port}/api/health`);
});

export default app;
