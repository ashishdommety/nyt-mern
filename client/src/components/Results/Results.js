import React, {Component} from 'react';
import ResultItem from './ResultItem';
import API from '../../utils/API';

class Results extends Component{
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      articles: []
    };
    // Binding the event listeners which we will pass as props
  }

  componentWillMount(){
    this.loadArticles();
  }

  loadArticles = query => {
    API.getArticles(query)
      .then(res =>
        // console.log(res.data.response.docs)
        this.setState({
          articles: res.data.response.docs
        })
      ).catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <h2>Results</h2>
        {this.state.articles.map((article) => {
          return(
              <ResultItem
              headline = {article.headline.main}/>
          );
        })}
      </div>
    )
  }
}

export default Results;
