import React, { useState } from 'react';
import './loginSignup.css';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const LoginSignup = () => {
  const [mode, setMode] = useState('signup');

  return (
    <div className="ls-container">
      <div className="buttons">
        <button
          className={mode === 'signup' ? 'active' : ''}
          onClick={() => setMode('signup')}>
          Sign Up
        </button>
        <button
          className={mode === 'login' ? 'active' : ''}
          onClick={() => setMode('login')}>
          Login
        </button>
      </div>

      <div className="form-wrapper">
        {mode === 'signup' && (
          <form className="form signup">
            <div className="input-group">
              <FaUser />
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
              <MdEmail />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <RiLockPasswordFill />
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        )}

        {mode === 'login' && (
          <form className="form login">
            <div className="input-group">
              <MdEmail />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <RiLockPasswordFill />
              <input type="password" placeholder="Password" required />
            </div>
            <a href="#" className="forgot">Forgot Password?</a>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
