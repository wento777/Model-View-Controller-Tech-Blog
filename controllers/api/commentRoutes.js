const router = require("express").Router();
const { Comment } = require("../../models");
const isAuth = require("../../utils/auth");


//create a new comment
router.post("/", async (req, res) => {
    console.log("create a new comment")
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(newComment)
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });



  //delete a comment
router.delete("/:id",isAuth, async (req, res) => {
    try {
      const postComment = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (commentData) {
        res.status(200).json(commentData);
      } else {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
  
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  