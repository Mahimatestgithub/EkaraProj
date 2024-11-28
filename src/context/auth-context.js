
import React, { createContext, useContext, useState } from "react";

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  // Function to handle login
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};




// import React, { createContext, useContext, useState } from "react";

// // Create a context for authentication
// const AuthContext = createContext();

// // AuthProvider component that provides authentication state and methods
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Simulate login and logout actions
//   const login = () => setIsLoggedIn(true);
//   const logout = () => setIsLoggedIn(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use auth context
// export const useAuth = () => useContext(AuthContext);









// import React, { createContext, useState, useContext } from 'react';

// // Create the AuthContext
// const AuthContext = createContext();

// // Create an AuthProvider component that will manage the state
// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => setIsLoggedIn(true);  // Set login state to true
//   const logout = () => setIsLoggedIn(false); // Set login state to false

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Custom hook to access the auth context
// export function useAuth() {
//   return useContext(AuthContext);
// }
