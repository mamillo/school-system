import React from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div style={{ width: "100%" }}>
      <header>
        <div>
          <h1>ELIMU SCHOOL STUDENTS MANAGEMENT SYSTEM</h1>
          <div className="motto">Clearly Different</div>
        </div>
        <button>Log out</button>
      </header>

      <div style={{ display: "flex" }}>
        <nav>
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Academic Performance</a></li>
            <li><a href="#">Social Groups</a></li>
            <li><a href="#">Communities</a></li>
            <li><a href="#">Disciplinary</a></li>
            <li><a href="#">Co-Curricular</a></li>
          </ul>
        </nav>

        <main>
          <div className="profile-card">
            <img src="#" alt="Student Photo" />
            <h2>Brandon Mamillo</h2>
            <p><strong>Adm.no:</strong> 20/194</p>
            <p><strong>Date of Birth:</strong> 12/01/2008</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Grade:</strong> 7</p>
            <p><strong>Parent/Guardian:</strong> Harry Porter</p>
            <p><strong>Email Address:</strong> Brandonmamillo@gmail.com</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Navbar;
