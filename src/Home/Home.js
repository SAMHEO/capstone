import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

function MainLogo() {
  return (
      <h1>Home Finder</h1>
  );
}

function NewPost() {
  return (
    <div class="newPost">
      <label>Publish a new post: </label>
      <textarea class="form-control" rows="5" id="newPostInput" placeholder="Say something"></textarea>
      <button type="submit" class="btn btn-success btn-default" id="submitPostButton"><span class="glyphicon glyphicon-off"></span> Submit </button>
    </div>
  );
}

//This is an example of user. Whieh will be used to connect with the database api
var tempUser1Name = "user1";
var tempUser1Des = "I want to find an apartment with individual bedroom and bathroom."
var tempUser1Time = "April 4, 2020, 22:37"
function Post1() {
  return (
      <div class="posts">
          <img src="ExampleImage.png" alt="ExampleImage" class="postUserImage"></img>
          <p>{tempUser1Name}</p>
          <p>{tempUser1Des}</p>
          <p>{tempUser1Time}</p>
      </div>
  );
}
var tempUser2Name = "user2";
var tempUser2Des = "I want to find a roommate with similar lifestyle as me."
var tempUser2Time = "April 4, 2020, 22:33"
function Post2() {
  return (
      <div class="posts">
          <img src="ExampleImage.png" alt="ExampleImage" class="postUserImage"></img>
          <p>{tempUser2Name}</p>
          <p>{tempUser2Des}</p>
          <p>{tempUser2Time}</p>
      </div>
  );
}

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div id="logo">
          <h1>Home Finder</h1>
        </div>
        <NewPost />      
        <Post1 />
        <Post2 />
      </div>
    );
  }
}
