import React, {Component} from 'react';
import API from '../../utils/API';

class ResultItem extends Component{
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      // topic:'',
      // startYear:'',
      // endYear:''
    }
    // Binding the event listeners which we will pass as props
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick = (event) => {
    event.preventDefault();
    // console.log('the api request will go here');
    API.saveArticle()
      .then(res =>
        console.log(res.data)
      ).catch(err => console.log(err));
  }

  render(){
    return(
      <div className="row">
        <p className="col-md-6">{this.props.headline}</p>
        <div className="col-md-6">
          <button onClick={this.handleSaveClick}>Save</button>
        </div>
      </div>
    )
  }
}

export default ResultItem;
