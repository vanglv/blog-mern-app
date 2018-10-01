const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');

// Get all Posts
router.route('/').get(PostController.getPosts);

// Add a new Post
router.route('/').post(PostController.addPost);

// Delete a post by cuid
router.route('/:cuid').delete(PostController.deletePost);

module.exports = router;
