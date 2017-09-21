import axios from 'axios';

export default{
  getArticles: function(query,startYear,endYear){
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fb06d804a7934525baf1d5cae47bb138&",{
      params:{
        q:query,
        begin_date:startYear+'0101',
        end_date:endYear+'1231'
      }
    });
  },
  getSavedArticles: function(){
    return axios.get("/api/saved");
  },
  saveArticle: function(){
    return axios.post("/api/saved");
  },
  deleteArticle: function(){
    return axios.delete("/api/saved");
  }
};
