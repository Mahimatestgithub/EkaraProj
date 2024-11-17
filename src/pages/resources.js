import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/resources.css';
import essay1 from '../images/essay1.jpg';
import essay2 from '../images/essay2.jpg';
import essay3 from '../images/essay3.jpg';
import essay4 from '../images/essay4.jpg';
import essay5 from '../images/essay5.jpg';
import essay6 from '../images/essay6.jpg';

const Resources = () => {
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    switch (index) {
      case 0:
        navigate('/essay1');
        break;
      case 1:
        navigate('/essay2');
        break;
      case 2:
        navigate('/essay3');
        break;
      case 3:
        navigate('/essay4');
        break;
      case 4:
        navigate('/essay5');
        break;
      case 5:
        navigate('/essay6');
        break;
      default:
        break;
    }
  };

  return (
    <div className="resources-container">
      <div className="resources-grid">
        <div className="resources-item" onClick={() => handleImageClick(0)}>
          <img src={essay1} alt="Whether you are a founder or just an idea person?" />
          <p>Whether you are a founder or just an idea person?</p>
        </div>
        <div className="resources-item" onClick={() => handleImageClick(1)}>
          <img src={essay2} alt="What is an idea?" />
          <p>What is an idea?</p>
        </div>
        <div className="resources-item" onClick={() => handleImageClick(2)}>
          <img src={essay3} alt="How to check whether the idea is good or not?" />
          <p>How to check whether the idea is good or not?</p>
        </div>
        <div className="resources-item" onClick={() => handleImageClick(3)}>
          <img src={essay4} alt="What's next?" />
          <p>What's next?</p>
        </div>
        <div className="resources-item" onClick={() => handleImageClick(4)}>
          <img src={essay5} alt="Case studies and market report on that idea" />
          <p>Case studies and market report on that idea</p>
        </div>
        <div className="resources-item" onClick={() => handleImageClick(5)}>
          <img src={essay6} alt="Making a pitch" />
          <p>Making a pitch</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;