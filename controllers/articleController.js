//require the models
const db = require("../models");
//export an object with key/value pairs of all the mongoose queries
//basic CRUD operations
module.exports = {
  saveArticle: function(req,res){
    console.log(`save article: ${req.body}`);
    // db.Article
      //mongoose query to save article goes here
  },
  deleteArticle: function(req,res){
    console.log(`delete article: ${req.body}`);
    // db.Article
      //mongoose query to delete article goes here
  }
};
