import React, {Component} from 'react';

class Saved extends Component{
  render(){
    return(
      <div>
        <h2>Saved</h2>
        <div>
          <h4>The whole world meditates!</h4>
          <p>date: {Date.now()}</p>
          <button>Remove</button>
          <div>
            <p>Notes go here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
