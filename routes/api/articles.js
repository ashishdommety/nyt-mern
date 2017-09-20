//use express router
const router = require("express").Router();
const articleController = require("../../controllers/articleController.js");
//require the controllers

//make all of your routes and how they affect the db
router.route("/")
  .post(articleController.saveArticle);

router.route("/:id")
  .delete(articleController.deleteArticle);

module.exports = router;
