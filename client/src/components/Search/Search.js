import React, {Component} from 'react';
import API from '../../utils/API';
import Results from '../Results/Results';
import './Search.css';

class Search extends Component{
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      topic:'',
      startYear:'',
      endYear:'',
      articles:[]
    }
    // Binding the event listeners which we will pass as props
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount(){
    // this.loadArticles();
  }

  loadArticles = (query,startYear,endYear) => {
    API.getArticles(query,startYear,endYear)
      .then(res =>
        this.sets
        console.log('data:',res.data.response.docs[0])
        // console.log('made request')
      ).catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]:value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log('you clicked me');
    // window.location.pathname = "/results";
    this.loadArticles(this.state.topic,this.state.startYear,this.state.endYear);

  }

  render(){
    return(
      <div className="row">
        <div className='search col-md-6'>
          <div>
            <h2>Search</h2>
            <form>
            <div>
              <p>Topic</p>
              <input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                type="text"
                placeholder="Today's topic"
                />
            </div>
            <div>
              <p>Start Year</p>
              <input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                type="text"
                placeholder="1985"
                />
            </div>
            <div>
              <p>End Year</p>
              <input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                type="text"
                placeholder="2017"
              />
            </div>
            <button
            onClick = {this.handleFormSubmit}
            className="search_button"
            >Submit</button>
          </form>
        </div>
      </div>
      <hr/>
      <div className='col-md-6'>
        <Results/>
      </div>
    </div>
    )
  }
}

export default Search;
