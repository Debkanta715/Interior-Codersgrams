import Portfolio from "../models/Portfolio.js";

// Test Route
export const testPortfolio = async (req, res) => {
  res.status(200).json({ message: "Portfolio Route Working" });
};

// Get all portfolio projects
export const getAllPortfolios = async (req, res) => {
  try {
    const { featured } = req.query;
    let query = {};

    if (featured === "true") {
      query.featured = true;
    }

    const projects = await Portfolio.find(query).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get specific project
export const getPortfolioById = async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create project (admin only)
export const createPortfolio = async (req, res) => {
  try {
    const { title, description, category, images, location, budget, duration } =
      req.body;

    if (!title || !description || !category) {
      return res
        .status(400)
        .json({ message: "Title, description and category are required" });
    }

    const project = new Portfolio({
      title,
      description,
      category,
      images: images || [],
      location,
      budget,
      duration,
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update project (admin only)
export const updatePortfolio = async (req, res) => {
  try {
    const project = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete project (admin only)
export const deletePortfolio = async (req, res) => {
  try {
    const project = await Portfolio.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
