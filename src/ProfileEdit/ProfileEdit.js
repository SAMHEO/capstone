import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./ProfileEdit.css";
import Profile from "../Profile/Profile";

var BriefIndroduction = "Male, 22\nUndergraduate student at Virginia Tech\nAs a sophomore student at Virginia Tech, I just moved out from university dormitory and I’m looking for an apartment with an individual bedroom and bathroom in each bedroom so that there is better privacy compared with my life in-campus dormitory."

  function ChangePhoto() {
    return(
      <div>
        <button onClick={ProfileEdit.changePhoto} id="change-photo" class="btn btn-secondary">Change Photo</button>
      </div>
    )
  }
  function TagExample1() {
    return(<div class="tag">Introvert
              <button onClick={ProfileEdit.delete} class="delete" id="delete-1">X</button>
            </div>);
  }
  function TagExample2() {
    return(<div class="tag">Quiet
            <button onClick={ProfileEdit.delete} class="delete" id="delete-2">X</button>
          </div>);
  }
  function TagExample3() {
    return(<div class="tag">Dislike Party
            <button onClick={ProfileEdit.delete} class="delete" id="delete-3">X</button>
    </div>);
  }
  function TagExample4() {
    return(<div class="tag">Easygoing
            <button onClick={ProfileEdit.delete} class="delete" id="delete-4">X</button>
    </div>);
  }
  function TagExample5() {
    return(<div class="tag">Has no pet
          <button onClick={ProfileEdit.delete} class="delete" id="delete-5">X</button>
    </div>);
  }
  function TagExample6() {
    return(<div class="tag">Has a vehicle
            <button onClick={ProfileEdit.delete} class="delete" id="delete-6">X</button>
    </div>);
  }
  function TagExample7() {
    return(<div class="tag">Individual Bedroom
          <button onClick={ProfileEdit.delete} class="delete" id="delete-7">X</button>
    </div>);
  }
  function TagExample8() {
    return(<div class="tag">Individual Bathroom
            <button onClick={ProfileEdit.delete} class="delete" id="delete-8">X</button>
    </div>);
  }
  function TagExample9() {
    return(<div class="tag">Near Bus Station 
            <button onClick={ProfileEdit.delete} class="delete" id="delete-9">X</button>
    </div>);
  }
  function AddNewPersonalityTag() {
    return(
      <div class="new-tag">
        <button onClick={ProfileEdit.addTag} class="new-tag" id="add-1"> + Add New Personality Tags</button>
      </div>
    );
  }
  function AddNewApartmentTag() {
    return(
      <div class="new-tag">
        <button onClick={ProfileEdit.addTag} class="new-tag" id="add-2"> + Add New Apartment Tags</button>
      </div>
    );
  }
  function AddNewRoommateTag() {
    return(
      <div class="new-tag">
        <button onClick={ProfileEdit.addTag} class="new-tag" id="add-3"> + Add New Roommate Tags</button>
      </div>
    );
  }
  
  class ProfileEdit extends Component {
    changePhoto = (e) => {
      //TODO the backend change photo function
    }
    
    save = (e) => {
        //TODO the backend save function
    };

    delete = (e) => {
      //TODO the backend delete tag function
    };

    addTag = (e) => {

    };
  
    render() {
      return (
        <div id="profile-edit-page">
          <div>
            <div class="center">
                <img
                  src="avatar.png"
                  className="d-block center"
                  alt="..."
                  id="user-photo"
                />
                <ChangePhoto />
            </div>
            <div>
              
            </div>
            <div class="profile-box">
                Basic Information
                <textarea
                    type="text"
                    id="basic-information"
                    placeholder="Write something to describe your self."
                    required
                    autofocus
                ></textarea>
            </div>
            
            <div class="profile-box">
              My Personality
              <div id="basic-info" class="tag-edit-box">
                <TagExample1 />
                <TagExample2 />
                <TagExample3 />
                <AddNewPersonalityTag />
              </div>
            </div>
            <div class="profile-box">
              I hope my roommate is 
              <div id="apartment-info" class="tag-edit-box">
                <TagExample4 />
                <TagExample5 />
                <TagExample6 />
                <AddNewApartmentTag />
              </div>
            </div>
            <div class="profile-box">
              I hope my apartment is 
              <div id="roommate-info" class="tag-edit-box">
                <TagExample7 />
                <TagExample8 />
                <TagExample9 />
                <AddNewRoommateTag />
              </div>
            </div>
            
            <button
                type="save"
                class="btn btn-success btn-default center"
                id="save-button"
                onClick={this.save}
              >
                <Nav.Link href="/profile" id="save-link">Save</Nav.Link>
              </button>
          </div>
        </div>
      );
    }
  }
  
  export default ProfileEdit;