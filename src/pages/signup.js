import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from "../images/logo.jpeg";

function Signup() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formData, setFormData] = useState({
    firstNm: '',
    LastNm: '',
    email: '',
    password: '',
    confirm_password: '',
    linkedin_profile: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/signup', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setMessage(response.data.message);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || err.response.data.message);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: windowWidth < 784 ? 'column' : 'row',
    width: windowWidth < 784 ? '90%' : '60%',
    maxWidth: '1000px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 6px 20px rgba(50, 50, 50, 0.25)',
    overflow: 'hidden',
    margin: '10px auto',
  };

  const leftBoxStyle = {
    backgroundColor: '#29cc56',
    width: windowWidth < 784 ? '100%' : '35%',
    padding: windowWidth < 784 ? '10px' : '50px',
    color: 'white',
  };

  const leftBoxTextStyle = {
    fontSize: windowWidth < 784 ? '22px' : '28px',
    textAlign: 'center',
    lineHeight: '1.2',
    color: 'white',
    marginTop : '50px '
  };

  const rightBoxStyle = {
    width: '100%',
    padding: windowWidth < 784 ? '20px' : '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const labelStyle = {
    marginBottom: '-20px',
    fontSize: '12px',
    color: '#333',
  };

  const inputStyle = {
    marginBottom: '6px',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '12px',
  };

  const buttonStyle = {
    padding: '7px',
    backgroundColor: '#29cc56',
    color: 'white',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  };

  const requiredStyle = {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: '2px',
  };

  const linksStyle = {
    marginTop: '5px',
    textAlign: 'center',
  };

  const linkTextStyle = {
    color: '#29cc56',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={leftBoxStyle}>
      <img src={logo} height={'80px'} alt='Logo'/>
        <h2 style={leftBoxTextStyle}>Sign up to access the Ekara Financials application</h2>
      </div>
      <div style={rightBoxStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <label htmlFor="firstNm" style={labelStyle}>First name</label>
          <input type="text" id="firstNm" name="firstNm" style={inputStyle} onChange={handleInputChange} />

          <label htmlFor="LastNm" style={labelStyle}>Last name</label>
          <input type="text" id="LastNm" name="LastNm" style={inputStyle} onChange={handleInputChange} />

          <label htmlFor="email" style={labelStyle}>E-mail</label>
          <input type="email" id="email" name="email" style={inputStyle} onChange={handleInputChange} />

          <label htmlFor="password" style={labelStyle}>Password <span style={requiredStyle}>*</span></label>
          <input type="password" id="password" name="password" style={inputStyle} onChange={handleInputChange} />

          <label htmlFor="confirm_password" style={labelStyle}>Re-type Password <span style={requiredStyle}>*</span></label>
          <input type="password" id="confirm_password" name="confirm_password" style={inputStyle} onChange={handleInputChange} />

          <label htmlFor="linkedin_profile" style={labelStyle}>Your LinkedIn profile</label>
          <input type="url" id="linkedin_profile" name="linkedin_profile" style={inputStyle} onChange={handleInputChange} />

          <button type="submit" style={buttonStyle}>Sign Up</button>

          {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <div style={linksStyle}>
            <p>Already have an account? <a href="/login" style={linkTextStyle}>Log In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;


