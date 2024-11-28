import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import Dashboard from './components/Dashboard';// Create a Dashboard component if not present
// import HomeLogin from "./pages/loginhome.js";

import { AuthProvider } from "./context/auth-context"; // Import AuthProvider




import logo from "./images/logo.jpeg"; // Import images as assets

import profileIcon from "./images/channels4_profile.jpg";
import heroImg1 from "./images/freepik__candid-image-photography-natural-textures-highly-r__63763.jpeg";
import heroImg2 from "./images/freepik__candid-image-photography-natural-textures-highly-r__63764.jpeg";
import heroImg3 from "./images/freepik__candid-image-photography-natural-textures-highly-r__63765.jpeg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import videoFile from "./images/invideo-ai-1080 Join Ekara_ The Ultimate Startup Communi 2024-10-22.mp4";
import sectionImage1 from './images/section1 image3.jpg';  // Import the image
import sectionImage2 from './images/section1 image2.jpg';
import sectionImage3 from './images/section1 image1.jpg';
import latestImage1 from './images/latets from ekara1.jpg';
import latestImage2 from './images/latestfromekara2.jpeg';
import latestImage3 from './images/latestfromekaera3.png';





function App() {
  
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
    <Header /> 
    <Routes>
      
      <Route path="/login" element={<Login />} /> {/* Update here */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} /> {/* Update here */}
      <Route path="/apply1" element={<Apply1 />} /> {/* Update here */}
      <Route path="/apply2" element={<Apply2 />} /> {/* Update here */}
      {/* <Route path="/loginhome" element={<HomeLogin />} /> Update here */}
      <Route
        path="/"
        element={ 
          <>
            <main>
                <section className="hero">
                  <div className="hero-text">
                    <h1>Ekara Financials</h1>
                    <p>Empowering startups with an unparalleled edge for success.</p>
                    <Link to="/apply1" className="apply-btn">Apply</Link> {/* Updated this line */}
                  </div>
                  <div className="hero-cards">
                    <div className="card">
                      <img src={heroImg1} alt="Image 1" />
                    </div>
                    <div className="card highlighted">
                      <img src={heroImg2} alt="Image 2" />
                    </div>
                    <div className="card">
                      <img src={heroImg3} alt="Image 3" />
                    </div>
                  </div>
                </section>
              </main>




              <div className="outer-container" style={{ padding: '20px' }}>
  <div className="containers" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', maxWidth: '3000px', backgroundColor: '#F0FFF4', padding: '50px 0', flexWrap: 'nowrap' }}>
    <div className="cards" style={{ backgroundColor: '#eaffd9', borderRadius: '15px', padding: '20px', textAlign: 'center', width: '270px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 120px' }}>
      <h2>Mission</h2>
      <p>“Ekara Financials' mission is to support startups in their initial phases, providing guidance, funding, and resources."</p>
    </div>
    <div className="cards" style={{ backgroundColor: '#eaffd9', borderRadius: '15px', padding: '20px', textAlign: 'center', width: '270px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 120px' }}>
      <h2>Vision</h2>
      <p>“To inspire innovation and foster a community of founders who develop impactful products, technologies, and services."</p>
    </div>
    <div className="cards" style={{ backgroundColor: '#eaffd9', borderRadius: '15px', padding: '20px', textAlign: 'center', width: '270px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 120px' }}>
      <h2>Objective</h2>
      <p>“Ekara Financials aims to help startups gain momentum, achieve growth, and succeed in the market."</p>
    </div>
  </div>
</div>



              <div className="main-container">
                <div className="heading">
                  <h1>“We enable <span className="highlight">founders</span> to create what people truly need, <br /> and the outcomes speak volumes.”</h1>
                </div>

                <div className="content">
                  <div className="item">
                    <div className="icon">
                      <img src={icon1} alt="Icon Description" />
                    </div>
                    <p>“At Ekara, we empower entrepreneurs from the very first step, regardless of their background."</p>
                  </div>

                  <div className="divider"></div>

                  <div className="item">
                    <div className="icon">
                      <img src={icon2} alt="Icon Description" />
                    </div>
                    <p>“Ekara provides tailored courses for founders and startups, empowering them with the skills to grow and succeed."</p>
                  </div>

                  <div className="divider"></div>

                  <div className="item">
                    <div className="icon">
                      <img src={icon3} alt="Icon Description" />
                    </div>
                    <p>“We provide startups with a powerful edge, offering funding support of up to 5 lakhs, to help turn your vision into reality.”</p>
                  </div>
                </div>

                <div className="bottom-border"></div>
              </div>




              {/* Useful Resources Section */}
              <div className="main-containers">
                <h2>Useful <span className="highlight">Resources</span></h2>
                <div className="video-container" style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
                  {!isVideoVisible ? (
                    <div
                      onClick={handlePlayVideo}
                      style={{
                        position: 'relative',
                        cursor: 'pointer',
                        width: '100%',
                        paddingBottom: '56.25%', // Maintain 16:9 aspect ratio
                        backgroundColor: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '20px',
                      }}
                    >
                      <span style={{ fontSize: '50px', color: '#fff' }}>▶️</span>
                    </div>
                  ) : (
                    <video
      controls
      src={videoFile} // Using video element instead of iframe
      title="Ekara Financials Video"
      style={{
        width: '100%',
        height: '500px',
        border: 'none',
        borderRadius: '20px',
      }}
    />
  )}
                </div>
              </div>




              {/* <div className="main-containers">
                <h2>Useful <span className="highlight">Resources</span></h2>
                <div className="video-container">
                  <iframe
                    src={videoFile}
                    title="Ekara Financials Video"
                    frameBorder="0"
                    allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div> */}






              {/* Resource Section */}
              <div className="resource">
                {/* Section 1 */}
                <div className="content">
           <div className="image-container">
           <img src={sectionImage1} alt="Image 1" /> {/* Use the imported image here */}
          </div>
          <div className="text-content">
          <h2>Empowering Founders</h2>
          <p>“Ekara provides an exclusive platform designed specifically for founders. Founders at Ekara gain access to a vast network of experienced peers, tapping into the knowledge.”</p>
          <hr />
         </div>
        </div>

{/* Section 2 */}
<div className="content">
        <div className="image-container">
          <img src={sectionImage3} alt="Discover Essential Courses" />
        </div>
        <div className="text-content">
          <h2>Discover Essential Courses</h2>
          <p>“Browse our curated selection of courses tailored specifically for startups. Learn from industry experts and acquire the skills you need to turn your vision into reality.”</p>
          <hr />
        </div>
      </div>

      {/* Section 3 */}
      <div className="content">
        <div className="image-container">
          <img src={sectionImage2} alt="Join the Startup Revolution" />
        </div>
        <div className="text-content">
          <h2>Join the Startup Revolution</h2>
          <p>“Take the first step toward building your dream startup. Sign up today and become part of a vibrant community that believes in innovation and collaboration.”</p>
          <hr />
        </div>
      </div>
    </div>



              {/* Latest from Ekara Section */}
              <section className="latest-from-ekara">
       <h2>
        Latest from <span className="ekara">Ekara</span>
      </h2>
      <div className="latest-images">
      <div className="image-container">
      <a href="library.html" target="_blank" rel="noopener noreferrer">
        <div className="image-wrapper">
          <img src={latestImage1} alt="Latest Image 1" /> {/* Use imported image */}
          <div className="overlay">Podcasts</div>
        </div>
      </a>
    </div>
    <div className="image-container">
      <a href="resources.html" target="_blank" rel="noopener noreferrer">
        <div className="image-wrapper">
          <img src={latestImage2} alt="Latest Image 2" /> {/* Use imported image */}
          <div className="overlay">Essays</div>
        </div>
      </a>
    </div>
    <div className="image-container">
      <a href="https://example.com/link3" target="_blank" rel="noopener noreferrer">
        <div className="image-wrapper">
          <img src={latestImage3} alt="Latest Image 3" /> {/* Use imported image */}
          <div className="overlay">Announcements</div>
        </div>
      </a>
    </div>
  </div>
</section>

            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/library" element={<Library />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/essay1" element={<Essay1 />} />
        <Route path="/essay2" element={<Essay2 />} />
        <Route path="/essay3" element={<Essay3 />} />
        <Route path="/essay4" element={<Essay4 />} />
        <Route path="/essay5" element={<Essay5 />} />
        <Route path="/essay6" element={<Essay6 />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply2" element={<Apply2 />} /> {/* Route for Apply2 */}
        
      </Routes>

      {/* Footer will be rendered globally for all routes */}
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
