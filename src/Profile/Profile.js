import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Profile.css";

function TagExample1() {
  return(<div class="tag">Introvert</div>);
}
function TagExample2() {
  return(<div class="tag">Quiet</div>);
}
function TagExample3() {
  return(<div class="tag">Dislike Party</div>);
}
function TagExample4() {
  return(<div class="tag">Easygoing</div>);
}
function TagExample5() {
  return(<div class="tag">Has no pet</div>);
}
function TagExample6() {
  return(<div class="tag">Has a vehicle</div>);
}
function TagExample7() {
  return(<div class="tag">Individual Bedroom</div>);
}
function TagExample8() {
  return(<div class="tag">Individual Bathroom</div>);
}
function TagExample9() {
  return(<div class="tag">Near Bus Station</div>);
}


class Profile extends Component {

  edit = (e) => {
    //TODO the backend edit function
  };

  render() {
    return (
      <div id="profile-page" style={{  }}>
        <div>
          <div class="center">
              <img
                src="avatar.png"
                className="d-block center"
                alt="..."
                id="user-photo"
              />
          </div>
          <div>
            
          </div>
          <div class="profile-box">
            Basic Information
            <div class="preofile-box" id="basic-info">
              <li>Male, 22</li>
              <li>Undergraduate student at Virginia Tech</li>
              <li>As a sophomore student at Virginia Tech, I just moved out from university dormitory and I’m looking for an apartment with an individual bedroom and bathroom in each bedroom so that there is better privacy compared with my life in-campus dormitory.</li>
            </div>
          </div>

          <div class="profile-box">
            My Personality
            <div id="basic-info" class="tag-box">
              <TagExample1 />
              <TagExample2 />
              <TagExample3 />
            </div>
          </div>

          <div class="profile-box">
            I hope my roommate is 
            <div id="apartment-info" class="tag-box">
              <TagExample4 />
              <TagExample5 />
              <TagExample6 />
            </div>
          </div>

          <div class="profile-box">
            I hope my apartment is 
            <div id="roommate-info" class="tag-box">
              <TagExample7 />
              <TagExample8 />
              <TagExample9 />
            </div>
          </div>
          
          <button
              type="edit"
              class="btn btn-success btn-default center"
              id="edit-button"
              onClick={this.edit}
            >
              <Nav.Link href="/profileedit" id="edit-link">Edit</Nav.Link>
            </button>
        </div>
      </div>
    );
  }
}

export default Profile;