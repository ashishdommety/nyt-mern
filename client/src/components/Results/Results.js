import React, {Component} from 'react';
import ResultItem from './ResultItem';
import API from '../../utils/API';

class Results extends Component{
  constructor(props) {
    super(props);
    // Setting initial state to store the input values
    this.state = {
      articles: this.props.articles,
      test: ''
    };
    // Binding the event listeners which we will pass as props
    // console.log(this.props);
  }

  componentWillMount(){
    // this.loadArticles('trump','1990','2017');
  }

  loadArticles = (query,startYear,endYear) => {
    API.getArticles(query,startYear,endYear)
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
        <h2>{this.props.data.name}</h2>
        {this.props.articles.map((article) => {
          return(
              <ResultItem
              headline = {article.snippet}/>
          );
        })}
      </div>
    )
  }
}

export default Results;
