import React, { Component } from 'react';
import Routes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Routes  />
          </div>  
      </Router>
    )
  }
}
