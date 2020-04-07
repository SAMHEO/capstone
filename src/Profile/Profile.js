import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Profile.css";

class Profile extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Profile Page</h2>
                </div>
            </div>
        );
    }
}

export default Profile;