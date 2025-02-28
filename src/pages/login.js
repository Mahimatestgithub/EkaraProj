import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import logo from "../images/logo.jpeg"; // Import useNavigate from react-router-dom

import { useAuth } from "../context/auth-context";
function Login() {
  const{login} = useAuth();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = { email, password };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log('Login successful:', data);
        // alert("Login successful");
        login();
        window.location.reload()
        // Store the token in session storage
        sessionStorage.setItem('Authorization', data.Authorization);

        // Set a timeout to expire the token after 5 seconds (5000ms)
        setTimeout(() => {
          sessionStorage.removeItem('Authorization');
          console.log('Token expired and removed from sessionStorage.');
        }, 50000);

        // Redirect to the login home page after successful login
       
       
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8f5',
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: windowWidth < 384 ? 'column' : 'row',
    width: windowWidth < 384 ? '90%' : windowWidth < 468 ? '80%' : windowWidth < 1219 ? '70%' : '40%',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 8px 24px rgba(105, 105, 105, 0.8)',
    overflow: 'hidden',
  };

  const leftStyle = {
    backgroundColor: '#29cc56',
    width: windowWidth < 384 ? '100%' : '50%',
    padding: windowWidth < 384 ? '10px' : '40px',
    color: 'white',
  };

  const leftTextStyle = {
    fontSize: windowWidth < 384 ? '14px' : '24px',
    textAlign: 'center',
    lineHeight: '1.5',
    color: 'white',
    marginTop : '70px'
  };

  const rightStyle = {
    width: '100%',
    padding: windowWidth < 384 ? '10px' : '40px',
    display: 'flex',
    flexDirection: 'column',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontSize: '12px',
    color: '#333',
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#29cc56',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  const linkStyle = {
    color: '#29cc56',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={leftStyle}>
          <img src={logo} height={'80px'} alt='Logo'/>
          <h2 style={leftTextStyle}>Login to access the Ekara Financials application</h2>
        </div>
        <div style={rightStyle}>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label htmlFor="email" style={labelStyle}>Email or Username</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />

            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />

            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <button type="submit" style={buttonStyle} disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            <div style={{ marginTop: '10px', textAlign: 'center', fontSize: '12px' }}>
              <a href="#" style={linkStyle}>Forgot your email or password?</a>
              <p>Don't have an account? <a href="/signup" style={linkStyle}>Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;



