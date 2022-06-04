import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap";

const login_url = 'http://localhost:8085/v1/user/login'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()
  const [showError, setShowError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const user_input = { 
      "userEmail" : email, 
      "userPassword": password, 
    };
    // send the username and password to the server
    const response = await axios.post(
      login_url,
      user_input
    );
    // set the state of the user
    if(response.data.userId) {
      setUser(response.data)
      // store the user in localStorage
      localStorage.setItem('user', JSON.stringify(response.data))
    } else {
      setShowError("Error Occurred with Login Details.")
    }
    console.log(response.data)
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  if(user) {
    return (
        < Navigate to="/" replace />
    );
  }

  // if there's no user, show the login form
  return (

    <div className="container">

      { showError.length > 0 ?
        <Alert className="my-2" key="danger" variant="danger" onClose={() => setShowError("")} dismissible>
          { showError }
        </Alert> : ""
      }

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="form-control" 
            id="email" 
            placeholder="Enter email" />
          <br/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="text" 
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="form-control" 
            id="password" 
            placeholder="Enter password" />
          <small id="emailHelp" className="form-text text-muted">Choose Strong Password</small>
          <br/>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;