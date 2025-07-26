import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Homepage.css';
function Home() {
  return (
    <>
      <div id="homepage">
        <nav id="navbar">

          <ul>
          <li><Link to="/criminals">Wanted List</Link></li>
          <li><Link to="/contactus">ContactUs</Link></li>
          <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>

        <div id="content">
          <h1>Welcome to the Federal Reserve Watchlist</h1>
          <p>This platform provides detailed and up-to-date information on individuals actively monitored or sought by the Federal Bureau of Investigation (FBI). In addition to comprehensive profiles of wanted persons, it also features key details regarding bounty rewards, case statuses, and guidance for the public on submitting useful tips. The goal is to foster public engagement and support in the pursuit of justice, by encouraging citizens to share relevant information that may aid in the identification, location, and apprehension of these individuals.
          AMA NAMNA GANI MY FRIEND! </p>
            <div id="fbi-images">
          <img src="https://logos-world.net/wp-content/uploads/2021/08/FBI-Logo.png"  alt="FBI Seal" />
          <img src="https://www.shutterstock.com/image-vector/yellow-black-color-line-striped-260nw-2446550797.jpg" alt="FBI Wanted" />
        </div>
        </div>

      <main id='main'>
        <Outlet />
      </main>

       

      </div>
      <footer id="footer">
        <p>&copy; 2025 Federal Reserve Watchlist. All Rights Reserved</p>
        <p>Developed by Angela, Jeremy, Kaynan, Jimmy, Kiama</p>
      </footer>
    </>
  );
}

export default Home;
