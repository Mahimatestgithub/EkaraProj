// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../components/footer"; // Adjusted path for Footer component
// import Header from "../components/header"; // Adjusted path for Header component
// import logo from "../images/logo.jpeg"; // Adjusted path for logo image
// import heroImg1 from "../images/freepik__candid-image-photography-natural-textures-highly-r__63763.jpeg"; // Adjusted path
// import heroImg2 from "../images/freepik__candid-image-photography-natural-textures-highly-r__63764.jpeg"; // Adjusted path
// import heroImg3 from "../images/freepik__candid-image-photography-natural-textures-highly-r__63765.jpeg"; // Adjusted path
// import icon1 from "../images/icon1.png"; // Adjusted path
// import icon2 from "../images/icon2.png"; // Adjusted path
// import icon3 from "../images/icon3.png"; // Adjusted path
// import videoFile from "../images/invideo-ai-1080 Join Ekara_ The Ultimate Startup Communi 2024-10-22.mp4"; // Adjusted path
// import sectionImage1 from "../images/section1 image3.jpg"; // Adjusted path
// import sectionImage2 from "../images/section1 image2.jpg"; // Adjusted path
// import sectionImage3 from "../images/section1 image1.jpg"; // Adjusted path
// import latestImage1 from "../images/latets from ekara1.jpg"; // Adjusted path
// import latestImage2 from "../images/latestfromekara2.jpeg"; // Adjusted path
// import latestImage3 from "../images/latestfromekaera3.png"; // Adjusted path

// import { useAuth } from "../context/auth-context"; // Import useAuth hook

// function HomeLogin() {
//   const [isVideoVisible, setIsVideoVisible] = useState(false);
//   const { isLoggedIn, logout } = useAuth(); // Get auth state and logout function

//   const handlePlayVideo = () => {
//     setIsVideoVisible(true);
//   };

//   return (
//     <>
//       {/* Header globally rendered for all routes */}
      

//       <main>
//         {/* Hero Section */}
//         <section className="hero">
//           <div className="hero-text">
//             <h1>Ekara Financials</h1>
//             <p>Empowering startups with an unparalleled edge for success.</p>
//             <Link to="/apply1" className="apply-btn">Apply</Link>
//           </div>
//           <div className="hero-cards">
//             <div className="card">
//               <img src={heroImg1} alt="Image 1" />
//             </div>
//             <div className="card highlighted">
//               <img src={heroImg2} alt="Image 2" />
//             </div>
//             <div className="card">
//               <img src={heroImg3} alt="Image 3" />
//             </div>
//           </div>
//         </section>

//         {/* Mission, Vision, Objective Section */}
//         <div className="outer-container" style={{ padding: '20px' }}>
//           <div className="containers" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', maxWidth: '3000px', backgroundColor: '#F0FFF4', padding: '50px 0', flexWrap: 'nowrap' }}>
//             <div className="cards" style={{ backgroundColor: '#eaffd9', borderRadius: '15px', padding: '20px', textAlign: 'center', width: '270px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 120px' }}>
//               <h2>Mission</h2>
//               <p>“Ekara Financials' mission is to support startups in their initial phases, providing guidance, funding, and resources."</p>
//             </div>
//             <div className="cards" style={{ backgroundColor: '#eaffd9', borderRadius: '15px', padding: '20px', textAlign: 'center', width: '270px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 120px' }}>
//               <h2>Vision</h2>
//               <p>“To inspire innovation and foster a community of founders who develop impactful products, technologies, and services."</p>
//             </div>
//             <div className="cards" style={{ backgroundColor: '#eaffd9', borderRadius: '15px', padding: '20px', textAlign: 'center', width: '270px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '0 120px' }}>
//               <h2>Objective</h2>
//               <p>“Ekara Financials aims to help startups gain momentum, achieve growth, and succeed in the market."</p>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="main-container">
//           <div className="heading">
//             <h1>“We enable <span className="highlight">founders</span> to create what people truly need, <br /> and the outcomes speak volumes.”</h1>
//           </div>

//           <div className="content">
//             <div className="item">
//               <div className="icon">
//                 <img src={icon1} alt="Icon 1" />
//               </div>
//               <p>“At Ekara, we empower entrepreneurs from the very first step, regardless of their background."</p>
//             </div>

//             <div className="divider"></div>

//             <div className="item">
//               <div className="icon">
//                 <img src={icon2} alt="Icon 2" />
//               </div>
//               <p>“Ekara provides tailored courses for founders and startups, empowering them with the skills to grow and succeed."</p>
//             </div>

//             <div className="divider"></div>

//             <div className="item">
//               <div className="icon">
//                 <img src={icon3} alt="Icon 3" />
//               </div>
//               <p>“We provide startups with a powerful edge, offering funding support of up to 5 lakhs, to help turn your vision into reality.”</p>
//             </div>
//           </div>
//           <div className="bottom-border"></div>
//         </div>

//         {/* Video Section */}
//         <div className="main-containers">
//           <h2>Useful <span className="highlight">Resources</span></h2>
//           <div className="video-container" style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
//             {!isVideoVisible ? (
//               <div
//                 onClick={handlePlayVideo}
//                 style={{
//                   position: 'relative',
//                   cursor: 'pointer',
//                   width: '100%',
//                   paddingBottom: '56.25%', // Maintain 16:9 aspect ratio
//                   backgroundColor: '#000',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: '20px',
//                 }}
//               >
//                 <span style={{ fontSize: '50px', color: '#fff' }}>▶️</span>
//               </div>
//             ) : (
//               <video
//                 controls
//                 src={videoFile}
//                 title="Ekara Financials Video"
//                 style={{
//                   width: '100%',
//                   height: '500px',
//                   border: 'none',
//                   borderRadius: '20px',
//                 }}
//               />
//             )}
//           </div>
//         </div>

//         {/* Resource Section */}
//         <div className="resource">
//           {/* Sections */}
//           {/* Section 1 */}
//           <div className="content">
//             <div className="image-container">
//               <img src={sectionImage1} alt="Empowering Founders" />
//             </div>
//             <div className="text-content">
//               <h2>Empowering Founders</h2>
//               <p>“Ekara provides an exclusive platform designed specifically for founders. Founders at Ekara gain access to a vast network of experienced peers, tapping into the knowledge.”</p>
//               <hr />
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="content">
//             <div className="image-container">
//               <img src={sectionImage2} alt="Discover Essential Courses" />
//             </div>
//             <div className="text-content">
//               <h2>Discover Essential Courses</h2>
//               <p>“Browse our curated selection of courses tailored specifically for startups. Learn from industry experts and acquire the skills you need to turn your vision into reality.”</p>
//               <hr />
//             </div>
//           </div>

//           {/* Section 3 */}
//           <div className="content">
//             <div className="image-container">
//               <img src={sectionImage3} alt="Smart Funding for Growth" />
//             </div>
//             <div className="text-content">
//               <h2>Smart Funding for Growth</h2>
//               <p>“Get funding for your startup with Ekara’s resources. We offer financial support to help you turn your idea into a reality.”</p>
//               <hr />
//             </div>
//           </div>
//         </div>

//         {/* Latest From Ekara */}
//         <div className="latest-news">
//           <h2>Latest From Ekara</h2>
//           <div className="news-item">
//             <img src={latestImage1} alt="News Item 1" />
//             <p>“A look at the latest updates and initiatives from Ekara Financials. Stay informed about upcoming events and new offerings.”</p>
//           </div>
//           <div className="news-item">
//             <img src={latestImage2} alt="News Item 2" />
//             <p>“Our latest success stories and founder interviews, showcasing the journey and achievements of startups supported by Ekara.”</p>
//           </div>
//           <div className="news-item">
//             <img src={latestImage3} alt="News Item 3" />
//             <p>“Ekara’s events and collaborations provide invaluable opportunities for networking and growth. Read more about the exciting new developments!”</p>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }

// export default HomeLogin;






















