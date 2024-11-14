// controllers/hootsController.js
const Hoot = require('../models/hoot');

// Create a new hoot
exports.createHoot = async (req, res) => {
  try {
    const hootData = req.body;
    const newHoot = await Hoot.create(hootData);
    res.status(201).json(newHoot);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hoot', message: error.message });
  }
};

// controllers/hootsController.js
exports.createComment = async (req, res) => {
    try {
      const hoot = await Hoot.findById(req.params.hootId);
      if (!hoot) return res.status(404).json({ error: 'Hoot not found' });
  
      // Assuming comments are stored in an array within the hoot document
      const commentData = req.body; // contains the comment text and any other relevant data
      hoot.comments.push(commentData);
      await hoot.save();
  
      res.status(200).json(hoot);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create comment', message: error.message });
    }
  };

// Get all hoots
exports.getAllHoots = async (req, res) => {
  try {
    const hoots = await Hoot.find();
    res.status(200).json(hoots);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hoots', message: error.message });
  }
};

// Get a single hoot by ID
exports.getHootById = async (req, res) => {
  try {
    const hoot = await Hoot.findById(req.params.hootId);
    if (!hoot) return res.status(404).json({ error: 'Hoot not found' });
    res.status(200).json(hoot);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hoot', message: error.message });
  }
};

// Update a hoot by ID
exports.updateHoot = async (req, res) => {
  try {
    const updatedHoot = await Hoot.findByIdAndUpdate(req.params.hootId, req.body, { new: true });
    if (!updatedHoot) return res.status(404).json({ error: 'Hoot not found' });
    res.status(200).json(updatedHoot);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update hoot', message: error.message });
  }
};

// Delete a hoot by ID
exports.deleteHoot = async (req, res) => {
  try {
    const deletedHoot = await Hoot.findByIdAndDelete(req.params.hootId);
    if (!deletedHoot) return res.status(404).json({ error: 'Hoot not found' });
    res.status(200).json({ message: 'Hoot deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete hoot', message: error.message });
  }
};
