// Dependencies
import React, { Component } from "react";
import {
  Menu
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// Create and export the Header class
export default class Header extends Component {
  // In the render layout the necessary Nav Points
  render() {
    return (
      <div className="header-desktop">
        <Menu pointing inverted secondary className="nav-bar">
          <Menu.Item
            as={NavLink}
            to="/Home"
            name="Home"
            >
            Home
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/About"
            name="About"
            >
            About
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/Portfolio"
            name="Portfolio"
            >
            Portfolio
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/Contact"
            name="Contact"
            >
            Contact
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
