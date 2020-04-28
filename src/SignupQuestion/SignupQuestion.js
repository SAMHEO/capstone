import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./SignupQuestion.css";

function handleImageClick(event) {
  //alert(event.target.className);
  console.log(document.getElementById(event.target.id).src);

  if (
    document.getElementById(event.target.id).src ===
    "http://localhost:3000/tag.png"
  ) {
    document.getElementById(event.target.id).src =
      "http://localhost:3000/tag-checked.png";
  } else {
    document.getElementById(event.target.id).src =
      "http://localhost:3000/tag.png";
  }
}

class SignupQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "none",
      description: "",
      critical: [],
      secondary: [],
      hobbies: [],
      isLoading: true,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  submit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    this.getTags();
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

  render() {
    const { isLoading } = this.state;

    const renderCrit = this.state.critical.map((key, index) => (
      <div className="tag-container">
        <input
          key={index}
          id="is-subscription"
          type="checkbox"
          checked={key.checked}
          // onChange={this.handleInputChange}
        />
        <label for="is-subscription">{key.name}</label>
      </div>
    ));
    const renderSec = this.state.secondary.map((key, index) => (
      <div className="tag-container">
        <input
          key={index}
          id="is-subscription"
          type="checkbox"
          checked={key.checked}
          // onChange={this.handleInputChange}
        />
        <label for="is-subscription">{key.name}</label>
      </div>
    ));
    const renderHobbies = this.state.hobbies.map((key, index) => (
      <div className="tag-container">
        <input
          key={index}
          id="is-subscription"
          type="checkbox"
          checked={key.checked}
          // onChange={this.handleInputChange}
        />
        <label for="is-subscription">{key.name}</label>
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
                <div className="input-group mb-3" id="name-input-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Name </span>
                  </div>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </div>
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
                  >
                    <option value="none">Prefer not answer</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="input-group mb-3" id="age-input-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Age </span>
                  </div>
                  <input
                    name="age"
                    type="text"
                    className="form-control"
                    value={this.state.age}
                    onChange={this.handleChange}
                  ></input>
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
