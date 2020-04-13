import React, { Component } from "react";
import "./Profile.css";

function AddNewTag() {
  return <div class="new-tag">+ Add New Tag</div>;
}
function TagExample1() {
  return <div class="tag">Introvert</div>;
}
function TagExample2() {
  return <div class="tag">Quiet</div>;
}
function TagExample3() {
  return <div class="tag">Dislike Party</div>;
}
function TagExample4() {
  return <div class="tag">Easygoing</div>;
}
function TagExample5() {
  return <div class="tag">Has no pet</div>;
}
function TagExample6() {
  return <div class="tag">Has a vehicle</div>;
}
function TagExample7() {
  return <div class="tag">Individual Bedroom</div>;
}
function TagExample8() {
  return <div class="tag">Individual Bathroom</div>;
}
function TagExample9() {
  return <div class="tag">Near Bus Station</div>;
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 4,
      name: "John",
      age: 0,
      sex: "",
      rent: 0,
      description: "",
      image: "",
      preferences: [],
      tags: [],
    };
  }
  edit = (e) => {};

  componentDidMount() {
    const search_info = {
      method: "POST",
      body: JSON.stringify({ name: this.state.name }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("api/user", search_info).then((res) => {
      console.log(res);
      this.setState({ rent: res.rent });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div id="profile-page" style={{}}>
        <div>
          <div class="center">
            <img
              src="avatar.png"
              className="d-block center"
              alt="..."
              id="user-photo"
            />
          </div>
          <div></div>
          <div class="profile-box">
            Basic Information
            {this.state.name}
            <div class="preofile-box" id="basic-info">
              <li>
                {this.state.sex}, {this.state.age}
              </li>
              <li>Undergraduate student at Virginia Tech</li>
              <li>
                {this.state.description}
                As a sophomore student at Virginia Tech, I just moved out from
                university dormitory and I’m looking for an apartment with an
                individual bedroom and bathroom in each bedroom so that there is
                better privacy compared with my life in-campus dormitory.
              </li>
            </div>
          </div>

          <div class="profile-box">
            My Personality
            <div class="preofile-box" id="basic-info">
              <TagExample1 />
              <TagExample2 />
              <TagExample3 />
              <AddNewTag />
            </div>
          </div>

          <div class="profile-box">
            I hope my roommate is
            <div class="preofile-box" id="basic-info">
              <TagExample4 />
              <TagExample5 />
              <TagExample6 />
              <AddNewTag />
            </div>
          </div>

          <div class="profile-box">
            I hope my apartment is
            <div class="preofile-box" id="basic-info">
              <TagExample7 />
              <TagExample8 />
              <TagExample9 />
              <AddNewTag />
            </div>
          </div>

          <button
            type="edit"
            class="btn btn-success btn-default center"
            id="edit-button"
            onClick={this.edit}
          >
            <span class="glyphicon glyphicon-off"></span> Edit{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
