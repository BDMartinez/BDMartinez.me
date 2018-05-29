// Dependencies
import React, { Component } from "react";
import {
  Segment,
  Sidebar
} from "semantic-ui-react";
import SocialMediaSidebar from "../SocialMediaSidebar"

// Create a component for the MainDisplay and export it
export default class MainDisplay extends Component {
  render() {
    return (
      <div className="main-display">
      <h1 className="center-piece">BDM</h1>
        <Sidebar.Pusher>
            <SocialMediaSidebar className="social-media-menu"/>
        </Sidebar.Pusher>
      </div>
    )
  }
}
