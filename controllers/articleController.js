//require the models
const db = require("../models/Article");
//export an object with key/value pairs of all the mongoose queries
//basic CRUD operations
module.exports = {
  saveArticle: function(req,res){
    console.log(req.body);
    res.send("I'm a saved article");
    // db.Article
      //mongoose query to save article goes here
  },
  deleteArticle: function(req,res){
    console.log(`delete article: ${req.body}`);
    // db.Article
      //mongoose query to delete article goes here
  },
  allSavedArticles: function(req,res){
    console.log(req.body);
  }
};
