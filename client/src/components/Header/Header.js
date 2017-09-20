import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
      <div>
        <h1>New York Times Article Scrubber!</h1>
        <h3> Search and save articles you love </h3>
        <button>Check Saved</button>
        <button>Home</button>
      </div>
    );
  }
}

export default Header;
