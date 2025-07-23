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
        <p>This site provides information on individuals monitored by the FBI and the PRIZE you can recieve for any useful info given about their whereabouts. !AMA NAMNA GANI MY FRIEND!</p>

        <div className="fbi-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6MZ5e8xfTEGmUdEia7F_5c2-gkJdA5JtxQ&s"
            alt="FBI Seal"
          />
          <img
            src="https://www.shutterstock.com/image-vector/yellow-black-color-line-striped-260nw-2446550797.jpg"
            alt="FBI Wanted"
          />
        </div>
      </div>

      <footer className="footer">
        <p>© 2025 Federal Reserve Project</p>
      </footer>
    </div>
  );
}

export default Homepage;
