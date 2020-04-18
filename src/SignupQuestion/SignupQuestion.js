import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./SignupQuestion.css";

//These should be load from database.
let importantTags = ["Has Pets", "Smoke", "Like Parties", "Play Instruments"];
let secondaryTags = ["Has Vehicle", "Vegeteriam", "Perfer Quiet", "High Standard Deadliness", "Wakes Up Early", "Sleeps Early"];
let hobbies = ["Art", "Basketball", "Baaseball", "Pop Music", "Rock Music", "Classic Music", "Cooking", "Fishing", "Football", "Tennis", "Video Games", "Swimming", "Gymnaastics"];

function handleTagClick(event) {
  //alert(event.target.className);
  if (event.target.className === "clickableTag"){
    event.target.className = "clickableTagChecked";
  } else {
    event.target.className = "clickableTag";
  }
}

function RenderImportantTag() {
  return (
    <div>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{importantTags[0]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{importantTags[1]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{importantTags[2]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{importantTags[3]}</button>
    </div>
  );
}

function RenderSecondaryTag() {
  return (
    <div>
    <button id="secondary-1" className="clickableTag" onClick={handleTagClick}>{secondaryTags[0]}</button>
    <button id="secondary-2" className="clickableTag" onClick={handleTagClick}>{secondaryTags[1]}</button>
    <button id="secondary-3" className="clickableTag" onClick={handleTagClick}>{secondaryTags[2]}</button>
    <button id="secondary-4" className="clickableTag" onClick={handleTagClick}>{secondaryTags[3]}</button>
    <button id="secondary-5" className="clickableTag" onClick={handleTagClick}>{secondaryTags[4]}</button>
    <button id="secondary-6" className="clickableTag" onClick={handleTagClick}>{secondaryTags[5]}</button>
    </div>
  );
}

function RenderHobbyTag() {
  return (
    <div>
    <button id="hobby-1" className="clickableTag" onClick={handleTagClick}>{hobbies[0]}</button>
    <button id="hobby-2" className="clickableTag" onClick={handleTagClick}>{hobbies[1]}</button>
    <button id="hobby-3" className="clickableTag" onClick={handleTagClick}>{hobbies[2]}</button>
    <button id="hobby-4" className="clickableTag" onClick={handleTagClick}>{hobbies[3]}</button>
    <button id="hobby-5" className="clickableTag" onClick={handleTagClick}>{hobbies[4]}</button>
    <button id="hobby-6" className="clickableTag" onClick={handleTagClick}>{hobbies[5]}</button>
    <button id="hobby-7" className="clickableTag" onClick={handleTagClick}>{hobbies[6]}</button>
    <button id="hobby-8" className="clickableTag" onClick={handleTagClick}>{hobbies[7]}</button>
    <button id="hobby-9" className="clickableTag" onClick={handleTagClick}>{hobbies[8]}</button>
    <button id="hobby-10" className="clickableTag" onClick={handleTagClick}>{hobbies[9]}</button>
    <button id="hobby-11" className="clickableTag" onClick={handleTagClick}>{hobbies[10]}</button>
    <button id="hobby-12" className="clickableTag" onClick={handleTagClick}>{hobbies[11]}</button>
    <button id="hobby-13" className="clickableTag" onClick={handleTagClick}>{hobbies[12]}</button>
    </div>
  );
}


class SignupQuestion extends Component {

    submit = (e) => {}

    render() {
      return (
        <div className="mt-5" style={{ justifyContent: "center", padding: 30 }}>
          <div style={{ clear: "both", margin: "25px" }} align="center">
            <h2>Please do some introduction about you</h2>
          </div>
          <div class="center-label">Basic information</div>
          <div class="basic-information">
            
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
              <select
                class="custom-gender"
                id="gender"
              >
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
            <div class="center-label">Why you choose Home Finder and What you want to find throw this website?</div>
                <textarea
                    type="text"
                    id="basic-description"
                    placeholder="Please tell us some..."
                    required
                    autofocus
                ></textarea>
            </div>
          <div class="form-group" align="center">
            <div class="center-label">Check all these basic information tags that properly describe about you.</div>
            <div id="important-info" class="tag-box">
              <RenderImportantTag />
            </div>
          </div>
          <div class="form-group" align="center">
            <div class="center-label">Check all these advanced information tags that properly describe about you.</div>
            <div id="secondary-info" class="tag-box">
              <RenderSecondaryTag />
            </div>
          </div>
          <div class="form-group" align="center">
            <div class="center-label">Check all these hobby informaation tags that properly describe about you.</div>
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