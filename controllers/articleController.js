//require the models
const Article = require("../models/Article.js");

//export an object with key/value pairs of all the mongoose queries
//basic CRUD operations
module.exports = {
  saveArticle: function(req,res){
    console.log(req.body);
    // res.send("I'm a saved article");
    const articleData = {
      title: req.body.headline,
      link: req.body.url
    }

    let entry = new Article(articleData);

    entry.save(function(err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      }
      // Or log the doc
      else {
        console.log(doc);
      }
    });
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
