import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><a href="#criminals">Criminals</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>

       <div className="content">
        <h1>Welcome to the Federal Reserve Watchlist</h1>
        <p>This site provides information on individuals monitored by the FBI. More information about Bounty Rewards and Useful Information of wanted criminals is also provided below.
        AMA NAMNA GANI MY FRIEND! </p>
        </div>
</div>
  );
}

export default Homepage;
