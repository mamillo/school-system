import React from "react";
import "./Dashboard.css"; // create this file for dashboard-specific styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top navigation bar */}
      <header className="dashboard-header">
        <h1>Elimu School Dashboard</h1>
        <nav>
          <ul>
            <li><a href="/students">Students</a></li>
            <li><a href="/teachers">Teachers</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="dashboard-main">
        {/* Announcements */}
        <section className="dashboard-section announcements">
          <h2>Announcements</h2>
          <ul>
            <li>📢 Midterm exams start next week.</li>
            <li>🎉 Sports Day scheduled for May 5th.</li>
            <li>📚 Library hours extended until 8 PM.</li>
          </ul>
        </section>

        {/* Quick Links */}
        <section className="dashboard-section quick-links">
          <h2>Quick Links</h2>
          <div className="links-grid">
            <a href="/profile" className="link-card">My Profile</a>
            <a href="/grades" className="link-card">Grades</a>
            <a href="/attendance" className="link-card">Attendance</a>
            <a href="/fees" className="link-card">Fees</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
