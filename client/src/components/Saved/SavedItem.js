import React, {Component} from 'react';
import './SavedItem.css';

class SavedItem extends Component{
  render(){
    return(
      <div className="row">
        <h4 className="col-md-4">No more poverty!</h4>
        <p className="col-md-4">date: {Date.now()}</p>
        <div className="col-md-4">
          <button>Remove</button>
        </div>
        <div className="row notes">
          <p>Notes go here</p>
        </div>
      </div>
    )
  }
}

export default SavedItem;
