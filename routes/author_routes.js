const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authorsController')

// Get all authors
router.get('/', authorsController.getAllAuthors);

// Get a particular author.
router.get('/:id', authorsController.getAuthor);

// Save author.
router.post('/save', authorsController.addAuthor);

// Update author.
router.post('/update/:id', authorsController.updateAuthor)

// Delete post.
router.delete('/delete/:id', authorsController.updateAuthor)


module.exports = router;