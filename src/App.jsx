import React, { useState } from 'react';
import './App.css';

function App() {
  const [showMission, setShowMission] = useState(false);
  const [team] = useState([
    { name: 'Angela', role: 'About Us Developer' },
    { name: 'Jomo', role: 'Frontend Engineer' },
    { name: 'Kaynan', role: 'Data Analyst' },
    { name: 'Kiama', role: 'Backend Developer' },
    { name : 'Liam', role: 'UI/UX Designer' },
  ]);

  return (
    <div className="about-container">
      <h1>About Our FBI Project</h1>

      <p>
        This project explores how the FBI uses modern technology and intelligence to access and track criminals.
        We aim to simulate how real-life investigations work using digital tools.
      </p>

      <button onClick={() => setShowMission(!showMission)}>
        {showMission ? 'Hide Mission' : 'Show Our Mission'}
      </button>

      {showMission && (
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To educate and demonstrate how surveillance, digital forensics, and intelligence analysis work
            in tracking criminal activity while respecting ethical boundaries.
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
}

export default App;


