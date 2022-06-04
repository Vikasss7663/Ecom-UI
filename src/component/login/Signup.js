import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const signup_url = 'http://localhost:8085/v1/user/signup'

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    e.preventDefault();
    const user_input = { 
        "userName" : username, 
        "userEmail" : email, 
        "userPassword": password, 
        "userPhone" : phone 
    };
    // send the username and password to the server
    const response = await axios.post(
        signup_url,
        user_input
    );
    if(response.data.userId) {
      // set the state of the user
      setUser(response.data);
      // store the user in localStorage
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    console.log(response.data);
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

    <div className="container my-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            className="form-control" 
            id="username" 
            placeholder="Enter username" />
          <br/>
        </div>
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
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="text" 
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            className="form-control" 
            id="phone" 
            placeholder="Enter phone" />
          <br/>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;