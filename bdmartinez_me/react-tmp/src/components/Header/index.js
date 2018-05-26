import React, { Component } from "react";
import NavBar from "../NavBar";
import SocialMedia from "../SocialMedia";


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {// <h3>This is the Header Component</h3>
        }
          <SocialMedia />
          <NavBar />
      </div>
    )
  }
}
