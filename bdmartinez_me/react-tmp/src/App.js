import React, { Component } from 'react';
import Header from "./components/Header"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header />
        </header>
        <p className="App-intro">
          The main display goes here
        </p>
      </div>
    );
  }
}

export default App;
