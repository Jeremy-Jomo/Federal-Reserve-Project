
import './Create.css';
import { useState } from 'react';




function CreateAcc({ onSubmitCreate }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

      function handleCreateAccount(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const newAccount = {
      username: username.trim(),
      password: password,
    };

    onSubmitCreate(newAccount); // send to App.jsx
    console.log('Account created:', newAccount);


    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setError('Account created successfully!');
  }

    return (
        <div className='wrapper'>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4">
            <h1 className="text-center mb-4">CREATE ACCOUNT</h1>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/FBISeal.png"
            alt="FBI logo"
            className="img-fluid mb-3"

          />
            <form className="create-form" onSubmit={handleCreateAccount}>
                <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text" className="form-control" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label">Confirm Password:</label>
                <input type="password" className="form-control" id="confirm-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Create Account</button>
                {error && <p className="text-danger mt-3 text-center">{error}</p>}
            </form>
            </div>
        </div>
        </div>
    );
    }
    export default CreateAcc;