import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navbar";
import Routes from "./Routes";
import Store from "./Store/store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  onLogin = () => {
    this.setState({
      logged: true,
    });
  };
  onLogout = () => {
    this.setState({
      logged: false,
    });
    window.sessionStorage.clear();
  };

  componentDidMount() {
    if (sessionStorage.getItem("userinfo") != null) {
      const email = JSON.parse(window.sessionStorage.getItem("userinfo")).email;
      if (email) {
        this.onLogin();
      } else {
        this.onLogout();
      }
    }
  }
  render() {
    const { logged, onLogout } = this.state;
    return (
      <Store.Provider value={this.state}>
        <div className="App">
          <Navigation logged={logged} onLogout={onLogout} />
          <Routes />
        </div>
      </Store.Provider>
    );
  }
}

export default App;
