import React from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import ContactUs from './Components/ContactUsPage';
<<<<<<< HEAD
import Homepage from './Components/Homepage';
import Aboutus from './Components/AboutUs';

=======
import Home from './Components/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details.jsx';
import CriminalsDisplay from './pages/CriminalsDisplay.jsx';
import AboutUs from './Components/AboutUs.jsx'
>>>>>>> origin/main

function App() {
  return (
    <div>
<<<<<<< HEAD

      <LoginPage  />

      <ContactUs />

      <Homepage />
      <Aboutus />


=======
      {/* <LoginPage  /> */}
    <Routes>
      <Route >
        <Route index element={<Home />} />
        <Route path="criminals" element={<CriminalsDisplay />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
    </Routes>
>>>>>>> origin/main
    </div>
  )
}
export default App
