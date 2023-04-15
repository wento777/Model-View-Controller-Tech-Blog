const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const  isAuth  = require('../utils/auth');






 
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



// GET post/
router.get('/', isAuth, async (req, res) => {

    if (!req.session.logged_in) {
        res.redirect('/');
        return;
      }
  
  try {
    const postData = await Post.findAll({
        include: [{
            model: User,
            attributes: ["name"]
        }]
    });

    const posts = postData.map((post) =>
        post.get({ plain: true })
    );

    res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn
    });
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});





 
// // GET /login
// router.get("/login", async (req, res) => {
//     // if a session exists, redirect to the homepage
//     // otherwise render the login view
//     if(req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     // if a session doesn't exist, well then the
//     // user needs to login, so present the login view
//     res.render('login');
// });

// GET /post/:id
router.get("/post/:id", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  if (req.session.loggedIn = false) {
    res.redirect("/login")
} else {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["name"]
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ["name"]
                    }
                },
            ],
        });

        if (postData) {
            const post = postData.get({ plain: true });
            res.render("viewpost", {
                post,
                loggedIn: req.session.loggedIn
            });
        } else {
            res.status(404).json({ message: "No post found with this id" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
});

module.exports = router;
