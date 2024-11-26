import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      if (response.ok) {
        console.log('Login successful:', data);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Styles
  const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f8f5' };
  const boxStyle = { display: 'flex', flexDirection: windowWidth < 384 ? 'column' : 'row', width: windowWidth < 384 ? '90%' : '40%', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 8px 24px rgba(105, 105, 105, 0.8)', overflow: 'hidden' };
  const leftStyle = { backgroundColor: '#29cc56', width: windowWidth < 384 ? '100%' : '50%', padding: windowWidth < 384 ? '10px' : '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' };
  const leftTextStyle = { fontSize: windowWidth < 384 ? '14px' : '24px', textAlign: 'center', lineHeight: '1.5', color: 'white' };
  const rightStyle = { width: '100%', padding: windowWidth < 384 ? '10px' : '40px', display: 'flex', flexDirection: 'column' };
  const formStyle = { display: 'flex', flexDirection: 'column' };
  const labelStyle = { marginBottom: '5px', fontSize: '12px', color: '#333' };
  const inputStyle = { marginBottom: '15px', padding: '12px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '14px' };
  const buttonStyle = { padding: '12px', backgroundColor: '#29cc56', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '10px' };
  const linkContainerStyle = { marginTop: '10px', textAlign: 'center', fontSize: '12px' };
  const linkStyle = { color: '#29cc56', textDecoration: 'none' };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={leftStyle}>
          <h2 style={leftTextStyle}>Login to access this application</h2>
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

            <div style={linkContainerStyle}>
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
