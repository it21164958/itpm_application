import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from './mall2.jpg';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/user/log", { name, password });
            console.log(response.data); 
            localStorage.setItem('userData', JSON.stringify(response.data));
            alert("Logged in Successfully!!!");

            // Check if the role is "Teacher"
            if (response.data.user.role === "Seller") {
                navigate('/sellerdashboard'); // Navigate to the teacher page
            } else {
                navigate('/home'); // Navigate to the home page
            }
        } catch (err) {
            setError("Invalid username or password"); 
            console.error(err); 
        }
    };

    return (
        <div 
            className="d-flex flex-column min-vh-100" 
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    {error && <p className="error-message">{error}</p>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="subButton">
                            Login
                        </Button>

                        <div className="signup-link">
                            <p>Don't have an account? <Link to="/sign">Sign up</Link></p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
