import React, {Component} from 'react';

class Search extends Component{
  render(){
    return(
      <div>
        <h2>Search</h2>
        <form>
          <p>Topic</p>
          <input
            value='Topic'
            name="topic"
            type="text"
            placeholder="Today's topic"
          />
          <p>Start Year</p>
          <input
            value='start'
            name="start year"
            type="text"
            placeholder="1985"
          />
          <p>End Year</p>
          <input
            value='end'
            name="end year"
            type="text"
            placeholder="2017"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Search;
