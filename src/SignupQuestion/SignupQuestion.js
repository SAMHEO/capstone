import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./SignupQuestion.css";

class SignupQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birthdate: "",
      gender: "none",
      description: "N/A",
      critical: [],
      secondary: [],
      hobbies: [],
      isLoading: true,
    };
  }

  onCheckedEvt = (e) => {
    const { checked } = e.target;
    this.setState({
      critical: this.state.critical.map((key, index) => ({
        id: index + 1,
        name: key.name,
        checked: index === parseInt(e.target.value) ? checked : key.checked,
      })),
    });
  };
  onCheckedEvt2 = (e) => {
    const { checked } = e.target;
    this.setState({
      secondary: this.state.secondary.map((key, index) => ({
        id: index + 1,
        name: key.name,
        checked: index === parseInt(e.target.value) ? checked : key.checked,
      })),
    });
  };
  onCheckedEvt3 = (e) => {
    const { checked } = e.target;
    this.setState({
      hobbies: this.state.hobbies.map((key, index) => ({
        id: index + 1,
        name: key.name,
        checked: index === parseInt(e.target.value) ? checked : key.checked,
      })),
    });
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.name === "checked" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    if (sessionStorage.getItem("userinfo") != null) {
      const userInfo = JSON.parse(window.sessionStorage.getItem("userinfo"));
      const clientId = userInfo.id;
      const email = userInfo.email;
      if (email) {
        this.setState({ id: clientId, email: email });
      }
    } else {
      alert("please log in first");
      this.props.history.push("/login");
    }
    console.log(this.props);
    this.getTags();
    console.log(this.state);
  }

  getTags() {
    fetch("api/criticaltags")
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        this.setState({
          critical: body,
        });
      });

    fetch("api/secondaryTags")
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        this.setState({
          secondary: body,
        });
      });

    fetch("api/hobbies")
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        this.setState({
          hobbies: body,
          isLoading: false,
        });
        console.log(this.state);
      });
  }

  submit = (e) => {
    console.log(this.state);
    const fetch_info = {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("api/temp", fetch_info)
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body);
        window.sessionStorage.setItem("selected_tags", true);
        this.props.history.push("/roommate");
      });
    e.preventDefault();
  };
  render() {
    const { isLoading } = this.state;

    const renderCrit = this.state.critical.map((key, index) => (
      <div className="tag-container" key={index}>
        <input
          name={key.name}
          value={index}
          id={`chkbox-${key.name}`}
          type="checkbox"
          checked={key.checked}
          onChange={this.onCheckedEvt}
        />
        <label htmlFor={`chkbox-${key.name}`}>{key.name}</label>
      </div>
    ));
    const renderSec = this.state.secondary.map((key, index) => (
      <div className="tag-container" key={index}>
        <input
          name={key.name}
          value={index}
          id={`chkbox-${key.name}`}
          type="checkbox"
          checked={key.checked}
          onChange={this.onCheckedEvt2}
        />
        <label htmlFor={`chkbox-${key.name}`}>{key.name}</label>
      </div>
    ));
    const renderHobbies = this.state.hobbies.map((key, index) => (
      <div className="tag-container" key={index}>
        <input
          name={key.name}
          value={index}
          id={`chkbox-${key.name}`}
          type="checkbox"
          checked={key.checked}
          onChange={this.onCheckedEvt3}
        />
        <label htmlFor={`chkbox-${key.name}`}>{key.name}</label>
      </div>
    ));
    return (
      <div className="mt-5" style={{ justifyContent: "center", padding: 30 }}>
        {isLoading ? (
          <Spinner animation="grow" />
        ) : (
          <div>
            <div align="center">
              <img src="logo.png" id="main-logo-loginpage" alt="logo" />
            </div>
            <div style={{ clear: "both", margin: "25px" }} align="center">
              <h2>Please do some introduction about you</h2>
            </div>
            <div className="center-label">Basic information</div>
            <form onSubmit={this.submit}>
              <div
                className="basic-information"
                id="basic-information-inputs-bar"
              >
                <div className="input-group mb-3" id="gender-input-box">
                  <div className="input-group-prepend">
                    <label className="input-group-text">Gender</label>
                  </div>
                  <select
                    name="gender"
                    className="custom-gender"
                    id="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                    // required
                  >
                    <option value="none">Prefer not to answer</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input-group mb-3" id="age-input-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Age </span>
                  </div>
                  <input
                    name="birthdate"
                    type="date"
                    className="form-control"
                    value={this.state.birthdate}
                    onChange={this.handleChange}
                    // required
                  />
                </div>
              </div>

              <div className="profile-box">
                <div className="center-label instruct-label">
                  Why you choose Home Finder and What you want to find throw
                  this website?
                </div>
                <textarea
                  name="description"
                  type="text"
                  id="basic-description"
                  placeholder="Please tell us some..."
                  value={this.state.description}
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <div className="form-group" align="center">
                <div className="center-label instruct-label">
                  Check all these basic information tags that properly describe
                  about you.
                </div>
                <div id="important-info" className="tag-box">
                  {renderCrit}
                </div>
              </div>
              <div className="form-group" align="center">
                <div className="center-label instruct-label">
                  Check all these advanced information tags that properly
                  describe about you.
                </div>
                <div id="secondary-info" className="tag-box">
                  {renderSec}
                </div>
              </div>
              <div className="form-group" align="center">
                <div className="center-label instruct-label">
                  Check all these hobby informaation tags that properly describe
                  about you.
                </div>
                <div id="hobby-info" className="tag-box">
                  {renderHobbies}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-success btn-default center"
                  id="Tag-Submit-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default SignupQuestion;
