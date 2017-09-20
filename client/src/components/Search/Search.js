import React, {Component} from 'react';
import './Search.css';

class Search extends Component{
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      topic:'news article',
      startYear:'start year',
      endYear:''
    }
    // Binding the event listeners which we will pass as props
  }

  render(){
    return(
      <div className='search'>
      <div>
        <h2>Search</h2>
        <form>
        <div>
          <p>Topic</p>
          <input
            value='Topic'
            name="topic"
            type="text"
            placeholder="Today's topic"
          />
        </div>
        <div>
          <p>Start Year</p>
          <input
            value='start'
            name="start year"
            type="text"
            placeholder="1985"
          />
        </div>
        <div>
          <p>End Year</p>
          <input
            value='end'
            name="end year"
            type="text"
            placeholder="2017"
          />
        </div>
          <button className="search_button">Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default Search;
