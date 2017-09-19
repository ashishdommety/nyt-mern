import React, {Component} from 'react';
import SavedItem from './SavedItem';

class Saved extends Component{
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
