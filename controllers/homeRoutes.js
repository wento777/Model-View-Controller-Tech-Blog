const router = require("express").Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// I have 3 routes that I'm accounting for
// one is just /, i.e. home
// another is /login
// and the last one is /post/:id
// these are all HTTP GET routes

// GET /
router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  // Find all the existing blogposts AND then
  // render your homepage view

//   Post.findAll({

//   }).then()

  res.render("homepage", { blogPosts, loggedIn: req.session.loggedIn});
});

// GET /login
router.get("/login", async (req, res) => {
    // if a session exists, redirect to the homepage
    // otherwise render the login view
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // if a session doesn't exist, well then the
    // user needs to login, so present the login view
    res.render('login');
});

// GET /post/:id
router.get("/post/:id", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("post", {});
});

module.exports = router;
