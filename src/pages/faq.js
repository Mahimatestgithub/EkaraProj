import React from 'react';
import '../styles/faq.css';
import Header from '../components/header'
import Footer from '../components/footer'


const FAQ = () => {
  return (
    <>
    <Header/>
    <main>
      <div className="container">
        <h1 className="title">Frequently Asked Questions</h1>

        <div className="opportunity">
          <h2>What services do you offer?</h2>
          <p>Investment, Mentorship Opportunities, Educational Resources</p>
        </div>

        <div className="opportunity">
          <h2>How can I contact customer support?</h2>
          <p>You can reach our customer support team via email at <a href="mailto:hr@ekara.co.in" className="green-link">hr@ekara.co.in</a>, or call us at (+91)9431348343 during business hours.</p>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default FAQ;