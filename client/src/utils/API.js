import axios from 'axios';

export default{
  getArticles: function(query){
    return axios.get("nytimes-url-goes here", {with the params object});
  }
  getSavedArticles: function(){
    return axios.get("api/saved");
  },
  saveArticles: function(){
    return axios.post("api/saved");
  },
  deleteArticles: function(){
    return axios.delete("api/saved");
  }
};
