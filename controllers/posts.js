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
  const post = new Post( // neues Element der Klasse Post erstellen
    req.body.title, // Properties aus der Product-Form speichern
    postDate, // Datum aus der postDate Util
    req.body.author,
    req.body.text
  );
  post.save(); // push
  res.redirect('/');
};

exports.getPosts = (req, res, next) => {
  const posts = Post.fetchAll(); // gibt alle Posts aus; siehe Model
  res.render('news', {
    psts: posts,
    pageTitle: 'advanced news',
    path: '/'
    // hasPost: posts.length > 0,
    // activeShop: true,
    // postCSS: true
  });
};
