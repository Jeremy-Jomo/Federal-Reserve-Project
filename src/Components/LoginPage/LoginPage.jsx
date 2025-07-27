import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage({ onSubmit, accounts }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(event) {
    event.preventDefault();

    const user = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (user) {
      onSubmit(event); // Valid credentials
      console.log('Login successful:', user);
    } else {
      setError('Invalid username or password');
    }
  }


  return (
    <div className='wrapper'>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <h1 className="text-center mb-4 p-3">Login</h1>
          <h1 className="text-center mb-4">FBI MOST WANTED</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/FBISeal.png"
            alt="FBI logo"
            className="img-fluid mb-3"
          />

          <form className="login-form" onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input type="text" className="form-control" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input type="password" className="form-control" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            {error && <p className="text-danger mt-3 text-center">{error}</p>}
          </form>
          <div className="mt-3 text-center">
            <p>
              Create Account <Link to="/CreateAcc">Don't have an account?</Link>
            </p>
            <p><a href="/forgot-password">Forgot Password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
