import React from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import ContactUs from './Components/ContactUsPage';
import Home from './Components/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details.jsx';
import CriminalsDisplay from './pages/CriminalsDisplay.jsx';
import AboutUs from './Components/AboutUs.jsx'

function App() {
  return (
    <div>
      {/* <LoginPage  /> */}
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home />}>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path="criminals" element={<CriminalsDisplay />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
    </Routes>
    </div>
  )
}
export default App
