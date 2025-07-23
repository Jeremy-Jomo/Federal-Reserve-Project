import React, { useState } from "react";
import "../App.css"; // ✅ Relative path to the CSS

const Aboutus = () => {
  const [showMission, setShowMission] = useState(false);
  const [team] = useState([
    { name: "Angela", role: "About Us Developer" },
    { name: "kiama", role: "Frontend Engineer" },
    { name: "Kaynan", role: "Data Analyst" },
    { name: "Liam", role: "Backend Developer" },
    { name: "Jomo", role: "Project Manager" },
    
  ]);

  return (
    <div className="about-container">
      <h1>About Our FBI Project</h1>
      <p>
        Our project explores how the FBI uses modern technology and intelligence
        to access and track criminals. We aim to simulate how real-life
        investigations work using digital tools.
      </p>

      <button onClick={() => setShowMission(!showMission)}>
        {showMission ? "Hide Mission" : "Show Our Mission"}
      </button>

      {showMission && (
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To simulate and educate people on the methods used by the FBI to
            maintain national security and bring justice through modern tech
            tools — ethically and effectively.
          </p>
        </div>
      )}

      <h2>Meet the Team</h2>
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
