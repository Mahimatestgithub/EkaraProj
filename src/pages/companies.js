import React from 'react';
import '../styles/companies.css';
import { Link } from "react-router-dom";
import Header from '../components/header'
import Footer from '../components/footer'
 // Make sure to import the relevant CSS

function CompanyPage() {
  return (
    <>
    <Header/>
    <main>
      <section className="apply-section">
        <h1>Apply <span>to this program</span></h1>
        {/* <a href="apply2.html" className="apply-button">Click here to apply</a> */}
        <Link to="/apply2" className="apply-button">Click here to apply</Link> {/* Updated this line */}

        <p className="summary">
          Details here will be filled shortly till then register and apply.
        </p>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default CompanyPage;
