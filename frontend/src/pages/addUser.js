import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "./mall1.jpg";

export default function Register() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newUser = {
      name,
      role,
      email,
      contactNumber,
      address,
      password,
    };

    axios
      .post("http://localhost:8000/user/add", newUser)
      .then(() => {
        alert("User Details were recorded.");
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "100% 100%", // Cover the entire container
        backgroundPosition: "center",
      }}
    >
      <div className="register-container">
        <Form onSubmit={sendData}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="role">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Select Role</option>
              <option value="Seller">Seller</option>
              <option value="Buyer">Buyer</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="contactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Contact Number"
              name="contactNumber"
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              name="address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/">Sign up</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
