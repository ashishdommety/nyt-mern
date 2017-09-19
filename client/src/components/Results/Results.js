import React, {Component} from 'react';
import ResultItem from './ResultItem';

class Results extends Component{
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      arr: [1,2,3,4,5]
    };
    // Binding the event listeners which we will pass as props
  }

  render(){
    return(
      <div>
        <h2>Results</h2>
        {this.state.arr.map((x) => {
          return(
              <ResultItem/>
          );
        })}
      </div>
    )
  }
}

export default Results;
