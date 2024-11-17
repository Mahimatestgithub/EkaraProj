import React, { useState, useEffect } from 'react';

function Login() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8f5',
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: windowWidth < 384 ? 'column' : 'row', // Stack vertically for very small screens
    width: windowWidth < 384 ? '90%' : windowWidth < 468 ? '80%' : windowWidth < 1219 ? '70%' : '40%',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 8px 24px rgba(105, 105, 105, 0.8)',
    overflow: 'hidden',
  };

  const leftStyle = {
    backgroundColor: '#29cc56',
    width: windowWidth < 384 ? '100%' : windowWidth < 468 ? '100%' : windowWidth < 1219 ? '50%' : '50%',
    padding: windowWidth < 384 ? '10px' : windowWidth < 468 ? '10px' : windowWidth < 1219 ? '20px' : '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const leftTextStyle = {
    fontSize: windowWidth < 384 ? '14px' : windowWidth < 468 ? '14px' : windowWidth < 1219 ? '18px' : '24px',
    textAlign: 'center',
    lineHeight: '1.5',
    color: 'white',
  };

  const rightStyle = {
    width: '100%', // Full width for smaller screens
    padding: windowWidth < 384 ? '10px' : windowWidth < 468 ? '10px' : windowWidth < 1219 ? '20px' : '40px',
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
    padding: windowWidth < 384 ? '8px' : windowWidth < 468 ? '8px' : windowWidth < 1219 ? '10px' : '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    padding: windowWidth < 384 ? '10px' : windowWidth < 468 ? '8px' : windowWidth < 1219 ? '10px' : '12px',
    backgroundColor: '#29cc56',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  const linkContainerStyle = {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '12px',
  };

  const linkStyle = {
    color: '#29cc56',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div style={leftStyle}>
          <h2 style={leftTextStyle}>Login to access this application</h2>
        </div>
        <div style={rightStyle}>
          <form style={formStyle}>
            <label htmlFor="username" style={labelStyle}>Username or e-mail</label>
            <input type="text" id="username" name="username" style={inputStyle} />

            <label htmlFor="password" style={labelStyle}>Password</label>
            <input type="password" id="password" name="password" style={inputStyle} />

            <button type="submit" style={buttonStyle}>Log In</button>

            <div style={linkContainerStyle}>
              <a href="#" style={linkStyle}>Forgot your username or password?</a>
              <p>Don't have an account? <a href="/signup" style={linkStyle}>Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;



// import React, { useState, useEffect } from 'react';

// function Login() {
//   // State to store screen width
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   // Effect hook to update the width when the window is resized
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Define default styles
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f8f5',
//   };

//   const boxStyle = {
//     display: 'flex',
//     width: windowWidth < 1219 ? '80%' : '40%',  // Adjust width based on screen size
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     boxShadow: '0 8px 24px rgba(105, 105, 105, 0.8)',
//     overflow: 'hidden',
//   };

//   const leftStyle = {
//     backgroundColor: '#29cc56',
//     width: windowWidth < 1219 ? '100%' : '50%',  // Adjust width for smaller screens
//     padding: windowWidth < 1219 ? '20px' : '40px',  // Adjust padding for smaller screens
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//   };

//   const leftTextStyle = {
//     fontSize: windowWidth < 1219 ? '20px' : '24px',  // Adjust font size for smaller screens
//     textAlign: 'center',
//     lineHeight: '1.5',
//     color: 'white',
//   };

//   const rightStyle = {
//     width: windowWidth < 1219 ? '100%' : '60%',  // Adjust width for smaller screens
//     padding: windowWidth < 1219 ? '20px' : '40px',  // Adjust padding for smaller screens
//     display: 'flex',
//     flexDirection: 'column',
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//   };

//   const labelStyle = {
//     marginBottom: '-25px',
//     fontSize: '14px',
//     color: '#333',
//   };

//   const inputStyle = {
//     marginBottom: '15px',
//     padding: windowWidth < 1219 ? '8px' : '10px',  // Adjust padding for smaller screens
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     fontSize: '14px',
//   };

//   const buttonStyle = {
//     padding: windowWidth < 1219 ? '10px' : '12px',  // Adjust padding for smaller screens
//     backgroundColor: '#29cc56',
//     color: 'white',
//     fontSize: '16px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginBottom: '10px',
//   };

//   const linkContainerStyle = {
//     marginTop: '10px',
//     textAlign: 'center',
//     fontSize: '14px',
//   };

//   const linkStyle = {
//     color: '#29cc56',
//     textDecoration: 'none',
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={boxStyle}>
//         <div style={leftStyle}>
//           <h2 style={leftTextStyle}>Login to access this application</h2>
//         </div>
//         <div style={rightStyle}>
//           <form style={formStyle}>
//             <label htmlFor="username" style={labelStyle}>Username or e-mail</label>
//             <input type="text" id="username" name="username" style={inputStyle} />

//             <label htmlFor="password" style={labelStyle}>Password</label>
//             <input type="password" id="password" name="password" style={inputStyle} />

//             <button type="submit" style={buttonStyle}>Log In</button>

//             <div style={linkContainerStyle}>
//               <a href="#" style={linkStyle}>Forgot your username or password?</a>
//               <p>Don't have an account? <a href="/signup" style={linkStyle}>Sign Up</a></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;















// import React, { useState } from 'react';
// //import '../styles/login.css';


// function Login() {
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f8f5',
//   };

//   const boxStyle = {
//     display: 'flex',
//     width: '40%',
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     boxShadow: '0 8px 24px rgba(105, 105, 105, 0.8)',
//     overflow: 'hidden',
//   };

//   const leftStyle = {
//     backgroundColor: '#29cc56',
//     width: '50%',
//     padding: '40px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//   };

//   const leftTextStyle = {
//     fontSize: '24px',
//     textAlign: 'center',
//     lineHeight: '1.5',
//     color: 'white',
//   };

//   const rightStyle = {
//     width: '60%',
//     padding: '40px',
//     display: 'flex',
//     flexDirection: 'column',
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//   };

//   const labelStyle = {
//     marginBottom: '-25px',
//     fontSize: '14px',
//     color: '#333',
//   };

//   const inputStyle = {
//     marginBottom: '15px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     fontSize: '14px',
//   };

//   const buttonStyle = {
//     padding: '12px',
//     backgroundColor: '#29cc56',
//     color: 'white',
//     fontSize: '16px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginBottom: '10px',
//   };

//   const linkContainerStyle = {
//     marginTop: '10px',
//     textAlign: 'center',
//     fontSize: '14px',
//   };

//   const linkStyle = {
//     color: '#29cc56',
//     textDecoration: 'none',
//   };

  

  

//   return (
//     <div style={containerStyle}>
//       <div style={boxStyle}>
//         <div style={leftStyle}>
//           <h2 style={leftTextStyle}>Login to access this application</h2>
//         </div>
//         <div style={rightStyle}>
//           <form style={formStyle}>
//             <label htmlFor="username" style={labelStyle}>Username or e-mail</label>
//             <input type="text" id="username" name="username" style={inputStyle} />

//             <label htmlFor="password" style={labelStyle}>Password</label>
//             <input type="password" id="password" name="password" style={inputStyle} />

//             <button type="submit" style={buttonStyle}>Log In</button>

//             <div style={linkContainerStyle}>
//               <a href="#" style={linkStyle}>Forgot your username or password?</a>
//               <p>Don't have an account? <a href="/signup" style={linkStyle}>Sign Up</a></p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


