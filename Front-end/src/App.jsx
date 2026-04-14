import React from "react";
import Login from "./components/Login";


function App() {
  return (
    <div className="split-container">
      {/* Left side with logo + slogan */}
      <div className="left-panel">
        <img src="/assets/logo.png" alt="Elimu School Logo" className="logo" />
        <h1>ELIMU SCHOOL</h1>
        <p>Clearly Different</p>
      </div>

      {/* Right side with login form */}
      <div className="right-panel">
        <Login />
      </div>
    </div>
  );
}

export default App;


