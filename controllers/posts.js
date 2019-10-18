const postDate = require('../util/date');
const Post = require('../models/post');

exports.getAddPost = (req, res, next) => {
  res.render('add-post', {
    pageTitle: 'Add Post',
    path: '/admin/add-post'
    // formsCSS: true,
    // productCSS: true,
    // activeAddPost: true
  });
};
exports.postAddPost = (req, res, next) => {
  const post = new Post(
    req.body.title,
    postDate,
    req.body.author,
    req.body.text
  );
  post.save();
  res.redirect('/');
};

exports.getPosts = (req, res, next) => {
  const posts = Post.fetchAll();
  res.render('news', {
    psts: posts,
    pageTitle: 'advanced news',
    path: '/'
    // hasPost: posts.length > 0,
    // activeShop: true,
    // postCSS: true
  });
};
