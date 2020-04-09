import React, { Component } from "react";
import "./Forget.css";

class Forget extends Component {
  render() {
    return (
      <div style={{ justifyContent: "center", padding: 30 }}>
        <img
          src="ExampleImage.png"
          alt="ExampleImage"
          align="center"
          class="center"
          style={{ width: "100px" }}
        ></img>
        <div style={{ clear: "both", margin: "25px" }} align="center">
          <h2>Forget Password</h2>
        </div>
        <div class="form-group" align="center">
          <input
            type="text"
            class="forget-box"
            id="username-forget-box"
            placeholder="Please enter your email address"
          ></input>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-success btn-default center"
            id="SendEmail-button"
          >
            <span class="glyphicon glyphicon-off"></span> Send verify email{" "}
          </button>
        </div>

        <div class="form-group" align="center">
          <input
            type="text"
            class="forget-box"
            id="verify-code-box"
            placeholder="Enter the verify code you received in email"
          ></input>
        </div>
        <div class="form-group" align="center">
          <input
            type="text"
            class="forget-box"
            id="password-renew-box"
            placeholder="Enter Your New Password"
          ></input>
        </div>
        <div class="form-group" align="center">
          <input
            type="text"
            class="forget-box"
            id="password-renew-confirm-box"
            placeholder="Re-enter Your New Password"
          ></input>
        </div>
        <div>
          <button
            type="submit"
            class="btn btn-success btn-default center"
            id="ForgetComfirm-button"
          >
            <span class="glyphicon glyphicon-off"></span> Confirm{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Forget;
