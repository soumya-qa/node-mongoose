const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController')

// Get all posts
router.get('/', postsController.getPosts)

// Get a particular post.
router.get('/:id', postsController.getPost);

// Save post.
router.post('/save',postsController.savePost)

// Update post.
router.post('/update/:id', postsController.updatePost)

// Delete post.
router.delete('/delete/:id', postsController.deletePost)


module.exports = router;