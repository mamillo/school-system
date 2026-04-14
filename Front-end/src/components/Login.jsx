import React, { useState } from "react";


const Login = () => {
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your authentication logic
    console.log("Admission:", admissionNumber);
    console.log("Password:", password);
    alert("Login attempt submitted!");
  };

  const handleReset = () => {
    setAdmissionNumber("");
    setPassword("");
  };

  return (
    <div className="container">
      {/* Left panel with logo and slogan */}
      <div className="left-panel">
        <img src="/logo.png" alt="Elimu School Logo" />
        <h1>ELIMU SCHOOL</h1>
        <p>Clearly Different</p>
      </div>

      {/* Right panel with login form */}
      <div className="right-panel">
        <div className="login-box">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="admission">Admission number</label>
            <input
              type="text"
              id="admission"
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value)}
              placeholder="e.g. 26/419"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <a href="/forgot-password">Forgot password?</a>

            <button type="submit">SIGN IN</button>
            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
