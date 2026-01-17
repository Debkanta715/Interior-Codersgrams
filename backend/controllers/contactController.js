import Contact from "../models/Contact.js";

// Test contact route
export const testContact = async (req, res) => {
  res.status(200).json({ message: "Contact Route Working" });
};

// Submit contact form
export const submitContact = async (req, res) => {
  const { name, email, phone, city, subject, message } = req.body;

  try {
    if (!name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, phone and message are required" });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      city,
      subject,
      message,
    });

    const savedContact = await contact.save();
    res.status(201).json({
      message: "Your message has been sent successfully",
      contact: savedContact,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all messages (admin only)
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get specific message
export const getMessageById = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update message status
export const updateMessageStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const message = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
