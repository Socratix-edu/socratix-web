import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Main, Navbar} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
