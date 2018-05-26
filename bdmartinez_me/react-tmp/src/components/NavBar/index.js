import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Portfolio</a></li>
          <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
      </div>
    )
  }
}
