import axios from 'axios';

export default{
  getArticles: function(query){
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fb06d804a7934525baf1d5cae47bb138&q=smoking&begin_date=18900101&end_date=20161231");
  },
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
