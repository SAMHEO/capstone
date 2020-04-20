import React, { Component } from "react";
import "./SignupQuestion.css";

//These should be load from database.
let importantTags = ["Has Pets", "Smoke", "Like Parties", "Play Instruments"];
let secondaryTags = [
  "Has Vehicle",
  "Vegeteriam",
  "Perfer Quiet",
  "High Standard Deadliness",
  "Wakes Up Early",
  "Sleeps Early",
];
let hobbies = [
  "Art",
  "Basketball",
  "Baseball",
  "Pop Music",
  "Rock Music",
  "Classic Music",
  "Cooking",
  "Fishing",
  "Football",
  "Tennis",
  "Video Games",
  "Swimming",
  "Gymnaastics",
];

function handleTagClick(event) {
  //alert(event.target.className);
  if (event.target.className === "clickableTag") {
    event.target.className = "clickableTagChecked";
  } else {
    event.target.className = "clickableTag";
  }
}

function handleImageClick(event) {
  //alert(event.target.className);
  console.log(document.getElementById(event.target.id).src)

  if (document.getElementById(event.target.id).src == "http://localhost:3000/tag.png") 
  {
      document.getElementById(event.target.id).src = "http://localhost:3000/tag-checked.png";
  }
  else
  {
      document.getElementById(event.target.id).src = "http://localhost:3000/tag.png";
  }
}

function RenderImportantTag() {
  return (
    <div>
      <div class="tag-container">
        <img id="important-1" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {importantTags[0]} </div>
      </div>
      <div class="tag-container">
        <img id="important-2" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {importantTags[1]} </div>
      </div>
      <div class="tag-container">
        <img id="important-3" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {importantTags[2]} </div>
      </div>
      <div class="tag-container">
        <img id="important-4" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {importantTags[3]} </div>
      </div>
    </div>
  );
}

function RenderSecondaryTag() {
  return (
    <div>
      <div class="tag-container">
        <img id="secondary-1" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {secondaryTags[0]} </div>
      </div>
      <div class="tag-container">
        <img id="secondary-2" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {secondaryTags[1]} </div>
      </div>
      <div class="tag-container">
        <img id="secondary-3" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {secondaryTags[2]} </div>
      </div>
      <div class="tag-container">
        <img id="secondary-4" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {secondaryTags[3]} </div>
      </div>
      <div class="tag-container">
        <img id="secondary-5" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {secondaryTags[4]} </div>
      </div>
      <div class="tag-container">
        <img id="secondary-6" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {secondaryTags[5]} </div>
      </div>
    </div>
  );
}

function RenderHobbyTag() {
  return (
    <div>
      <div class="tag-container">
        <img id="hobby-1" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[0]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-2" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[1]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-3" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[2]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-4" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[3]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-5" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[4]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-6" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[5]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-7" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[6]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-8" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[7]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-9" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[8]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-10" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[9]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-11" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[10]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-12" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[11]} </div>
      </div>
      <div class="tag-container">
        <img id="hobby-13" src="tag.png" class="tag-background" onClick={handleImageClick}></img>
        <div class="tag-text"> {hobbies[12]} </div>
      </div>

    </div>
  );
}

class SignupQuestion extends Component {
  submit = (e) => {};

  render() {
    return (
      <div className="mt-5" style={{ justifyContent: "center", padding: 30 }}>
        <div align="center">
          <img
            src="logo.png"
            id="main-logo-loginpage"
          />
        </div>
        <div style={{ clear: "both", margin: "25px" }} align="center">
          <h2>Please do some introduction about you</h2>
        </div>
        <div class="center-label">Basic information</div>
        <div class="basic-information" id="basic-information-inputs-bar">
          <div class="input-group mb-3" id="name-input-box">
            <div class="input-group-prepend">
              <span class="input-group-text">Name </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Your Name"
            ></input>
          </div>
          <div class="input-group mb-3" id="gender-input-box">
            <div class="input-group-prepend">
              <label class="input-group-text" for="Gender">
                Gender
              </label>
            </div>
            <select class="custom-gender" id="gender">
              <option selected>Prefer not answer</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </div>
          <div class="input-group mb-3" id="age-input-box">
            <div class="input-group-prepend">
              <span class="input-group-text">Age </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Your Age"
            ></input>
          </div>
        </div>
        <div class="profile-box">
          <div class="center-label instruct-label">
            Why you choose Home Finder and What you want to find throw this
            website?
          </div>
          <textarea
            type="text"
            id="basic-description"
            placeholder="Please tell us some..."
            required
            autofocus
          ></textarea>
        </div>
        <div class="form-group" align="center">
          <div class="center-label instruct-label">
            Check all these basic information tags that properly describe about
            you.
          </div>
          <div id="important-info" class="tag-box">
            <RenderImportantTag />
          </div>
        </div>
        <div class="form-group" align="center">
          <div class="center-label instruct-label">
            Check all these advanced information tags that properly describe
            about you.
          </div>
          <div id="secondary-info" class="tag-box">
            <RenderSecondaryTag />
          </div>
        </div>
        <div class="form-group" align="center">
          <div class="center-label instruct-label">
            Check all these hobby informaation tags that properly describe about
            you.
          </div>
          <div id="hobby-info" class="tag-box">
            <RenderHobbyTag />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success btn-default center"
            id="Tag-Submit-button"
            onClick={this.submit}
          >
            <span class="glyphicon glyphicon-off"></span> Submit{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default SignupQuestion;
