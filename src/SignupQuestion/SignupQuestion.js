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
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{secondaryTags[0]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{secondaryTags[1]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{secondaryTags[2]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{secondaryTags[3]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{secondaryTags[4]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{secondaryTags[5]}</button>
    </div>
  );
}

function RenderHobbyTag() {
  return (
    <div>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[0]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[1]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[2]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[3]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[4]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[5]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[6]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[7]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[8]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[9]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[10]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[11]}</button>
    <button id="important-1" className="clickableTag" onClick={handleTagClick}>{hobbies[12]}</button>
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
          <div class="form-group" align="center">
            Check all these basic informaation tags that properly describe about you.
            <div id="important-info" class="tag-box">
              <RenderImportantTag />
            </div>
          </div>
          <div class="form-group" align="center">
            Check all these advanced information tags that properly describe about you.
            <div id="secondary-info" class="tag-box">
              <RenderSecondaryTag />
            </div>
          </div>
          <div class="form-group" align="center">
            Check all these hobby informaation tags that properly describe about you.
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