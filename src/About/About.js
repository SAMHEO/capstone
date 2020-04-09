import React, { Component } from "react";

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
        <header className="App-header">
          {username ? `Hello ${username}` : "Hello World"}
        </header>
        <div style={{ clear: "both" }} align="center">
          <h2>About Page</h2>
        </div>
        <div align="center">
          This is a brief introduction about us and our project.<br></br>
          Our project is to build an website for residents in Blacksburg to find a better housing or a new roommate.
          

        </div>
      </div>
    );
  }
}

export default About;
