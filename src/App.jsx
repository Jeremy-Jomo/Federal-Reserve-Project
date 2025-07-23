
import React from 'react';
import LoginPage from './Components/LoginPage/LoginPage';




function App() {

  function onSubmit(event) {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  }


  return (
    <div>
      {/* Add your content here */}
      <h1>Federal Reserve App</h1>
      <LoginPage onSubmit={onSubmit} />
    </div>
  )
}

export default App
