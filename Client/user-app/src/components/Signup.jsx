import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); // Added state for password
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (name.trim() === "" || password.trim() === "") return;

    localStorage.setItem("user", JSON.stringify({ name, password }));
    navigate("/home"); // Redirect to home page after signup
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Corrected setPassword
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signup;
