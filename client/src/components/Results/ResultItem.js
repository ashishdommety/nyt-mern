import React, {Component} from 'react';

class ResultItem extends Component{
  render(){
    return(
      <div className="row">
        <p className="col-md-6">{this.props.headline}</p>
        <div className="col-md-6">
          <button>Save</button>
        </div>
      </div>
    )
  }
}

export default ResultItem;
