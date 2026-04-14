import React from "react";
import Login from "./components/Login";


function App() {
  return (
    <div className="central-container">
      <div className="central-box">
        <img src="/assets/logo.png" alt="Elimu School Logo" className="logo" />
        <h1>ELIMU SCHOOL</h1>
        <p>Clearly Different</p>
        <Login />
      </div>
    </div>
  );
}

export default App;
