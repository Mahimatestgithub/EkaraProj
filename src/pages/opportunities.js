import React from 'react';
import '../styles/opportunities.css';
import Header from '../components/header'
import Footer from '../components/footer'

const Opportunities = () => {
  return (
    <>
    <Header/>
    <div className="opportunities-container">
      <h2 className="opportunities-title">Opportunities</h2>

      <div className="opportunity-section">
        <h3>Manthan</h3>
        <p>
          The Manthan platform fosters large-scale collaboration between industry and the scientific research community, 
          aiming to support India in achieving its national goals and contributing to the United Nations’ Sustainable 
          Development Goals (SDGs). This initiative bridges the gap between sectors, driving innovation and progress toward 
          these critical objectives.
        </p>
      </div>

      <div className="opportunity-section">
        <h3>Startup India Portal</h3>
        <p>
          The Startup India portal is an online platform designed to provide a one-stop solution for entrepreneurs, 
          offering resources, tools, and support for registering startups, accessing government schemes, and scaling 
          their businesses in India.
        </p>
      </div>

      <div className="opportunity-section">
        <h3>MAARG</h3>
        <p>
          Mentorship, Advisory, Assistance, Resilience, and Growth: MAARG is a national mentorship platform launched 
          by Startup India to connect startups with experienced mentors for guidance, support, and growth opportunities.
        </p>
      </div>

      <div className="opportunity-section">
        <h3>BHASKAR</h3>
        <p>
          Bharat Research, Knowledge, and Science Repository: BHASKAR is an initiative aimed at creating a comprehensive 
          repository of India's scientific and research output, facilitating easy access to scientific knowledge for the 
          public and policymakers.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Opportunities;
