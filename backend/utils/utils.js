import jwt from "jsonwebtoken";

// Generate JWT
const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export { generateToken };
