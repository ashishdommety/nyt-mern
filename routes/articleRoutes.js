const router = require('express').Router();
const articleController = require("../controllers/articleController.js");

module.exports = router
  .post("/api/saved",articleController.saveArticle)
