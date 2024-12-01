import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate  } from "react-router-dom";
import "./App.css"; // Import your CSS file
import Footer from "./components/footer"; // Import Footer component
import Header from "./components/header"; // Import Header component
import About from "./pages/about"; // Import About page
import CompanyPage from './pages/companies';
import Opportunities from "./pages/opportunities";
import Library from "./pages/library";
import Resources from "./pages/resources";
import Essay1 from "./pages/essay1";
import Essay2 from "./pages/essay2";
import Essay3 from "./pages/essay3";
import Essay4 from "./pages/essay4";
import Essay5 from "./pages/essay5";
import Essay6 from "./pages/essay6";
import Privacy from "./pages/privacy";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Apply1 from "./pages/apply1";
import Apply2 from "./pages/apply2";
import TermsOfUse from "./pages/termsofuse";
import FAQ from "./pages/faq";


import Home from "./pages/home.js";

//import { AuthProvider } from "./context/auth-context"; // Import AuthProvider
import { AuthProvider, useAuth } from "./context/auth-context";




import logo from "./images/logo.jpeg"; 

import profileIcon from "./images/channels4_profile.jpg";
import heroImg1 from "./images/freepik__candid-image-photography-natural-textures-highly-r__63763.jpeg";
import heroImg2 from "./images/freepik__candid-image-photography-natural-textures-highly-r__63764.jpeg";
import heroImg3 from "./images/freepik__candid-image-photography-natural-textures-highly-r__63765.jpeg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import videoFile from "./images/invideo-ai-1080 Join Ekara_ The Ultimate Startup Communi 2024-10-22.mp4";
import sectionImage1 from './images/section1 image3.jpg';  
import sectionImage2 from './images/section1 image2.jpg';
import sectionImage3 from './images/section1 image1.jpg';
import latestImage1 from './images/latets from ekara1.jpg';
import latestImage2 from './images/latestfromekara2.jpeg';
import latestImage3 from './images/latestfromekaera3.png';





function App() {
  
  const { isLoggedIn } = useAuth();
  //const [isLogggedIn, setIsLogggedIn] = useState(false);
  // Toggle navbar function
  const toggleNavbar = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
  };
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  

  const handlePlayVideo = () => {
    setIsVideoVisible(true);
  };
  return (
    <AuthProvider> {/* Wrap the entire App with AuthProvider */}
    <Router>
    {/* Header globally rendered for all routes */}
    {/* <Header />  */}
    <Routes>
      
      
      <Route path="/signup" element={<Signup />} /> {/* Update here */}
      <Route path="/apply1" element={isLoggedIn?(<Apply1 />):<Navigate to={'/'}/> } /> {/* Update here */}
      <Route path="/apply2" element={<Apply2 />} /> {/* Update here */}
     
      

      <Route
        path="/*"
        element={ isLoggedIn?(<Home/>) : <Login/>


     }
        />
        <Route path="/companies" element={isLoggedIn?(<CompanyPage />):<Navigate to={'/'}/>} />
        <Route path="/about" element={isLoggedIn?<About />: <Navigate to={'/'}/>} />
        <Route path="/opportunities" element={isLoggedIn?<Opportunities />:<Navigate to={'/'}/>} />
        <Route path="/library" element={isLoggedIn?<Library />:<Navigate to={'/'}/>} />
        <Route path="/resources" element={isLoggedIn?<Resources />:<Navigate to={'/'}/>} />
        <Route path="/privacy" element={isLoggedIn?<Privacy/>:<Navigate to={'/'}/>} />
        <Route path="/essay1" element={isLoggedIn?<Essay1 />:<Navigate to={'/'}/>} />
        <Route path="/essay2" element={isLoggedIn?<Essay2 />:<Navigate to={'/'}/>} />
        <Route path="/essay3" element={isLoggedIn?<Essay3 />:<Navigate to={'/'}/>} />
        <Route path="/essay4" element={isLoggedIn?<Essay4 />:<Navigate to={'/'}/>} />
        <Route path="/essay5" element={isLoggedIn?<Essay5 />:<Navigate to={'/'}/>} />
        <Route path="/essay6" element={isLoggedIn?<Essay6 />:<Navigate to={'/'}/>} />
        <Route path="/termsofuse" element={isLoggedIn?<TermsOfUse />:<Navigate to={'/'}/>} />
        <Route path="/faq" element={isLoggedIn? <FAQ />:<Navigate to={'/'}/>} />
        <Route path="/apply2" element={isLoggedIn? <Apply2 /> : <Navigate to ={'/'}/>} /> {/* Route for Apply2 */}
        
      </Routes>

      {/* Footer will be rendered globally for all routes */}
      {/* <Footer /> */}
    </Router>
    </AuthProvider>
  );
}

export default App;
