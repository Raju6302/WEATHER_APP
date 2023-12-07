// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css"

const LoginPage = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if the entered username is "demo" and password is "password"
    if (username === "demo" && password === "password") {
      // Simulate a successful login
      setLoggedIn(true);
      // Redirect to EntryFile
      navigate("/EntryFile");
    } else {
      // Handle failed login
      alert("Invalid login details. Please try again.");
    }
  };

  return (
    <center>
      <div className="login-body">
        <h2 className="login-title">Login Page</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="username-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </center>
  );
};

export default LoginPage;
