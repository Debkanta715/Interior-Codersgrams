const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");

// const connectDB = require('./config/db'); // Assuming you have a DB connection file
// connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
