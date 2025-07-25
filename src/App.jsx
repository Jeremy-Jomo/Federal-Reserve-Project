import React from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import ContactUs from './Components/ContactUsPage';
import Home from './Components/Home.jsx';
import { Routes, Route ,Navigate } from 'react-router-dom';
import Details from './pages/Details.jsx';
import CriminalsDisplay from './pages/CriminalsDisplay.jsx';
import AboutUs from './Components/AboutUs.jsx'
import { useState } from 'react';
import CreateAcc from './Components/CreateAcc/Create.jsx';
import { useNavigate } from 'react-router-dom';



function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  function handleAccountCreate(newAccount) {
    setAccounts((prev) => [...prev, newAccount]);
    console.log('Accounts:', accounts);
    navigate('/'); // Redirect to home after account creation
  }

  return (
    <div>


    <Routes>

      <Route
      index
      element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onSubmit={() => setIsLoggedIn(true)} accounts={accounts}/>}

     />

   <Route
    path="home"
    element={
      isLoggedIn ? <Home /> : <Navigate to="/" replace />
    }
  />

  <Route path="/CreateAcc" element={<CreateAcc onSubmitCreate={handleAccountCreate} />} />

  <Route
      path='/'
      element={<Home />

      }>
  <Route
    path="criminals"
    element={<CriminalsDisplay />}
    />


    <Route
      path="details/:id"
      element={<Details />}
      />
    <Route
      path="about"
      element={<AboutUs />}
      />
      <Route
      path="contactus"
      element={<ContactUs />}
      />

    </Route>
    </Routes>

    </div>
  )
}
export default App
