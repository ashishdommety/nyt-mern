import React, {Component} from 'react';
import API from '../../utils/API';
import SavedItem from './SavedItem';

class Saved extends Component{
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
    }
    // Binding the event listeners which we will pass as props
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.showSavedArticles();
  }

  showSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        console.log(res)
        // this.setState({
        //   articles: res.data.response.docs
        // })
      ).catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <h2>Saved</h2>
        <SavedItem/>
      </div>
    );
  }
}

export default Saved;
