import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/apply1.css';
import Header from '../components/header'
import Footer from '../components/footer'

function Apply1() {
  return (
    <>
    <Header/>
    <main>
      <section className="apply-section">
        <h1>Apply <span>to this program</span></h1>
        {/* <a href="apply2.js" className="apply-button">Click here to apply</a> */}
        {/* <a href="javascript:void(0);" className="apply-button" onclick="window.location.href='apply2.js';">Click here to apply</a> */}
        <Link to="/apply2" className="apply-button">Click here to apply</Link>
        <p className="summary">
          People frequently wonder what goes on at this organization. Here's a summary of what to expect during the program and the advantages of being a founder. For a deeper dive into why applying could be a great move for you, check out the full details here.
        </p>

        <h2>How to apply?</h2>
        <ol>
          <li>If you want to apply, please submit your <a href="apply2.js">application</a> online.</li>
          <li>People who apply before the regular deadline will hear back by December 18. If you apply after the deadline, we’ll still consider the application but can't promise exactly when we’ll get back to you.</li>
          <li>We encourage you to submit your application as soon as you’re ready to apply.</li>
          <li>If your application is promising, we will invite you to interview with us. Most interviews will be held by video conference in November and early December. We typically make decisions the same day as your interview, and we give everyone who interviews detailed feedback on our decision.</li>
          <li>We invest in companies as soon as they are accepted; we do not wait for the batch to start.</li>
        </ol>
      </section>

      <section className="content-section">
        <h2>Goal of the program</h2>
        <p>The main mission of Ekara Financials is to help startups launch and grow successfully. When companies come to Ekara Financials, they’re at various stages—some are just getting started, while others may already be a year or more into their journey. Regardless of their starting point, the objective is to ensure they are significantly stronger and more prepared after three months of support.</p>
      </section>
    </main>
    <Footer/>
    </>
  );
}

export default Apply1;
