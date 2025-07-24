import React from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import ContactUs from './Components/ContactUsPage';
import Home from './Components/Home.jsx';
import { Routes, Route , Navigate  } from 'react-router-dom';
import Details from './pages/Details.jsx';
import CriminalsDisplay from './pages/CriminalsDisplay.jsx';
import AboutUs from './Components/AboutUs.jsx'
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>

      {/* <LoginPage  /> */}
    <Routes>
      <Route
        index
        element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onSubmit={() => setIsLoggedIn(true)} />}

       />

       <Route
        path="home"
        element={
          isLoggedIn ? <Home /> : <Navigate to="/" replace />
        }
      />
      <Route >

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
