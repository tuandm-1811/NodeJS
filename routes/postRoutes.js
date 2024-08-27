const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Route để hiển thị tất cả các bài viết
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.render('index', { posts });
});

// Route để hiển thị form tạo bài viết mới
router.get('/new', (req, res) => {
  res.render('new-post');
});

// Route để xử lý tạo bài viết mới
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.redirect('/');
});

// Route để hiển thị bài viết cụ thể
router.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});

module.exports = router;
