const express = require('express');
const postsController = require('../controllers/posts');

const router = express.Router();

router.get('/add-post', postsController.getAddPost);

router.post('/add-post', postsController.postAddPost);

module.exports = router;
