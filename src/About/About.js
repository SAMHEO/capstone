import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  componentDidMount() {
    fetch("api/group")
      .then(res => res.json())
      .then(data => this.setState({ username: data.username }));
  }

  render() {
    const { username } = this.state;

    return (
      <div style={{ justifyContent: "center", padding: 30 }}>
        
        <div style={{ clear: "both" }} align="center">
          <h2>About Us</h2>
        </div>
        <div align="center" id="about">
          Our Home Finder project aims to find suitable apartment accommodation for the relevant personnel in any university community. We have created a platform for mutual communication, and people can post information about renting apartments on our platform. Everyone can set the type of apartment they like, and filter according to the relevant conditions to find the apartment that meets the needs of each user. At the same time, users can also match future roommates with their personal characteristics and preferences for roommates, helping our users get along with roommates in the future.
        </div>
      </div>
    );
  }
}

export default About;