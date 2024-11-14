// routes/hoots.js
const express = require('express');
const router = express.Router();
const hootsController = require('../controllers/hootsController');
const verifyToken = require('../middleware/verify-token.js');

// Use the token verification middleware for protected routes
router.use(verifyToken);

// Route to create a new hoot
router.post('/', hootsController.createHoot);

// Route to create a comment
router.post('/:hootId/comments', hootsController.createComment);

// Route to get all hoots
router.get('/', hootsController.getAllHoots);

// Route to get a single hoot by ID
router.get('/:hootId', hootsController.getHootById);

// Route to update a hoot by ID
router.put('/:hootId', hootsController.updateHoot);

// Route to delete a hoot by ID
router.delete('/:hootId', hootsController.deleteHoot);




module.exports = router;