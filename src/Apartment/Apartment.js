import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Apartment.css";

function ApartmentPost(name, address, price, description) {
    return (
        <div class="posts apartment">
            <img src="ExampleImage.png" alt="ExampleImage" class="postUserImage"></img>
            <p>{name}</p>
            <p>{address}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
}


function ApartmentPostExample1() {
    return (
        <div class="posts apartment">
            <img src="ExampleImage.png" alt="ExampleImage" class="postUserImage"></img>
            <p>TerraceView</p>
            <p>500 Hunt Club Rd.</p>
            <p>$480 / Month</p>
            <p>3 bedrooms apartment for rent</p>
        </div>
    );
}

class Apartment extends Component {
    render() {
        return (
            <div style={{ justifyContent: 'center', padding: 30 }}>
                <div class="center">
                    <h2 id="apartmentLogo" align="center" class="ceneter">Apartment Page</h2>
                </div>
                <div class="apartmentPostsArea">
                <ApartmentPostExample1 />
                <ApartmentPostExample1 />
                <ApartmentPostExample1 />
                <ApartmentPostExample1 />
                </div>
            </div>
        );
    }
}

export default Apartment;