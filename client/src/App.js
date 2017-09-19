import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import ResultItem from './components/Results/ResultItem';
// import {Results, ResultItem} from './components/Results';
import Saved from './components/Saved/Saved';
import SavedItem from './components/Saved/SavedItem';


class App extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      image: [1,2,3,4,5]
    };
    // Binding the event listeners which we will pass as props
  }

  render() {
    return (
      <div className='container'>
        <Header/>
        <hr/>
        <Search/>
        <hr/>
        <Results/>
        <hr/>
        <Saved/>
        <hr/>
      </div>
    );
  }
}

export default App;
