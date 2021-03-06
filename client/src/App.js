import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Saved from './components/Saved/Saved';

class App extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      fromChild:''
    };
    // Binding the event listeners which we will pass as props
  }

  render() {
    return (
      <Router>
      <div className='container'>
        <Header/>
        <hr/>
        <Route exact path = "/" component={Search}/>
        <Route exact path = "/saved" component={Saved}/>
      </div>
      </Router>
    );
  }
}

export default App;
