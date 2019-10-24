const express = require("express");
const postsController = require("../controllers/posts");
const loginController = require("../controllers/login");

const router = express.Router();

router.get("/add-post", postsController.getAddPost);

router.post("/add-post", postsController.postAddPost);

router.get("/login", loginController.login);

module.exports = router;
