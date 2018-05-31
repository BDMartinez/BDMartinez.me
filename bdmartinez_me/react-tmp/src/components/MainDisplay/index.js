// Dependencies
import React, { Component } from "react";
import {
  Button,
  Segment,
  Sidebar,
  Sticky
} from "semantic-ui-react";
import SocialMediaSidebar from "../SocialMediaSidebar"
import IntroBox from "../IntroBox";

// Create a component for the MainDisplay and export it
export default class MainDisplay extends Component {
  state = {
    // State remains empty for now
  }
  // Create method to handle context for the Sidebar
  handleContextRef = contextRef =>
    this.setState({
      contextRef
    });
  // Call the render the method to render the components
  render() {
    // Store the context in a variable
    const { contextRef } = this.state;
    // Render the Display
    return (
      <div className="main-display" ref={this.handleContextRef}>
        <Sticky context={contextRef} pushing>
          <h1 className="center-piece">BDM</h1>
          <IntroBox />
          <SocialMediaSidebar className="social-media-menu" attached="right"/>
        </Sticky>
      </div>
    )
  }
}
