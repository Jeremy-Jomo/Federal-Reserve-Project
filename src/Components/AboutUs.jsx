// src/Components/Aboutus.jsx
import React, { useState } from "react";
import "../App.css";

const Aboutus = () => {
  const [showMission, setShowMission] = useState(false);
  const [team] = useState([
    { name: "Angela", role: "About Us Developer" },
    { name: "James", role: "Frontend Engineer" },
    { name: "Aisha", role: "Data Analyst" },
    { name: "Brian", role: "Backend Developer" },
  ]);

  return (
    <div className="about-container">
      <h1>About Our FBI Project</h1>
      <p>
        Our project explores how the FBI uses modern technology and intelligence
        to access and track criminals. We simulate investigative processes to
        demonstrate how data and digital tools are used in real life.
      </p>

      <button onClick={() => setShowMission(!showMission)} className="btn btn-primary">
        {showMission ? "Hide Mission" : "Show Our Mission"}
      </button>

      {showMission && (
        <div className="mission mt-3">
          <h2>Our Mission</h2>
          <p>
            To simulate and educate people on the methods used by the FBI to
            maintain national security and bring justice through ethical and
            effective technology.
            
            
          </p>
        </div>
      )}

      <h2 className="mt-4">Meet the Team</h2>
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            <strong>{member.name}</strong> — {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aboutus;
