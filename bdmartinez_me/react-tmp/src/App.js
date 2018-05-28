// Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import {
  Segment,
  Divider
} from "semantic-ui-react";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay"
import logo from './logo.svg';
import './App.css';


// The App component will act as the router between displays
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="all">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Header />
            </header>
              <MainDisplay />
          </div>
          </Router>
      </div>
    );
  }
}

export default App;
