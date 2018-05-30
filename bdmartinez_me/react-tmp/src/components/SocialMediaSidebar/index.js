// Dependencies
import React, { Component } from "react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon
} from "semantic-ui-react";

// Create the Social Media Class to house the Social Media Account Links
export default class SocialMediaSidebar extends Component {
  // Set the intial visibility of the sidebar to false
  state = {
    visible: false
  }
  // Call the toggleVisibility method and pass it a callback that sets the state to visible
  toggleVisibility = () => this.setState({
    visible: !this.state.visible
  })
  // Call the render method
  render() {
    // Store the visibility state in a variable
    const  { visible } = this.state;
    // Render the sidebar
    return(
      <div className="social-media-sidebar">
      <Sidebar.Pusher>
      <Button attached="right" color="black" size="medium" className="social-media-button" onClick={this.toggleVisibility}>Follow Me</Button>
      </Sidebar.Pusher>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            direction="right"
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name="github">
              <Icon name="github" />
              Github
            </Menu.Item>
            <Menu.Item name="linkedin">
              <Icon name="linkedin" />
              LinkedIn
            </Menu.Item>
            <Menu.Item name="twitter">
              <Icon name="twitter" />
              Twitter
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    )
  }
}
