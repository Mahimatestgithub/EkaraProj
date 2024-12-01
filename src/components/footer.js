import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './footer.css';

function Footer() {
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  const handleApplyClick = () => {
    navigate('/apply1'); // Navigate to Apply2 page
  };

  return (
    <>
      {/* Learn More Section */}
      <section className="learn-more-section">
        <h2>Learn More</h2>
        <div className="info-cards">
          <Link to="/library" className="learnmorecard left">
            <h3>Library</h3>
            <p>Get all the videos and podcasts here</p>
          </Link>
          <Link to="/resources" className="learnmorecard right">
            <h3>Work</h3>
            <p>Where Productivity Meets Purpose</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          {/* Footer Columns */}
          <div className="footer-column">
            <h4>Quick links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/library">Programs</Link></li>
              <li><Link to="/about">Co-Founders</Link></li>
              <li><Link to="/termsofuse">Terms of use</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Information</h4>
            <ul>
              <li><a href="https://www.google.com/maps?q=Your+Address">Address</a></li>
              <li><a href="mailto:hr@ekara.co.in">Email</a></li>
              <li><a href="tel:+1234567890">Phone Number</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social Media Links</h4>
            <ul>
              <li><a href="https://www.instagram.com/ekarafinancial/">Instagram</a></li>
              <li><a href="https://www.linkedin.com/products/ekara-financials-free-consultation/">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/ekara-financials/?originalSubdomain=in">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Apply Section */}
        <div className="apply-section">
          <p>"Create what people truly desire."</p>
          <button onClick={handleApplyClick} className="apply-btn">Apply</button> {/* Updated button */}
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>2024 Ekara Financials. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;




