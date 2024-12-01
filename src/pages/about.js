import React from "react";
import Header from '../components/header'
import Footer from '../components/footer'
import "../styles/about.css"; // Import your CSS for the About page

function About() {
  return (
    <>
    <Header/>
    <div>
      <div className="main-content">
        <h1>
          <span>What</span> is this organization and <br /> <span>What</span> it does?
        </h1>
        <hr />
        
        <section className="content-section">
          <h2>Introduction</h2>
          <p>
            People frequently wonder what goes on at this organization. Here's a summary
            of what to expect during the program and the advantages of being a founder.
            For a deeper dive into why applying could be a great move for you, check out
            the full details here.
          </p>
        </section>

        <section className="content-section">
          <h2>About this program</h2>
          <h3>Investment</h3>
          <p>
            We offer initial funding of approximately $500,000 in return for equity,
            typically around 7% of the company, to help startups get off the ground and
            navigate their early growth phases.
          </p>
          <h3>Mentorship Opportunities</h3>
          <p>
            Founders gain access to a network of seasoned entrepreneurs and industry
            professionals who provide strategic advice, helping them refine their product,
            develop effective market strategies, and prepare for future fundraising.
          </p>
          <h3>Educational Resources</h3>
          <p>
            Ekara Financials offers an array of resources, including workshops, seminars,
            and access to a comprehensive library of entrepreneurial materials tailored to
            assist startups in their development journey.
          </p>
        </section>

        <section className="content-section">
          <h2>Goal of the program</h2>
          <p>
          The main mission of Ekara Financials is to help startups launch and grow successfully. When companies come to Ekara Financials, they’re at various stages—some are just getting started, while others may already be a year or more into their journey. Regardless of their starting point, the objective is to ensure they are significantly stronger and more prepared after three months of support. For most startups, becoming "stronger" means developing a more refined product with an expanded user base and exploring more pathways to secure funding. Every startup, regardless of its maturity, gains from the dynamic, focused environment at Ekara Financials. Intensity is perhaps the best word to capture the experience—three months dedicated entirely to building and refining startups. Everyone involved, including Ekara’s team, other founders in the cohort, alumni, guest speakers, and potential investors, is committed to each startup’s growth. This supportive, highly driven environment cultivates strong motivation, the exact energy needed to tackle the challenges of launching a company. Many founders see the 11 weeks leading up to Demo Day as the most productive time in their entrepreneurial journeys. Although Ekara Financials continues its support beyond the initial three-month period, and the alumni network remains a powerful resource, those 11 weeks hold a unique significance. While people can’t be molded into something they’re not, the right environment can unlock their full potential. Many are often surprised at what they’re capable of achieving.


          </p>
        </section>

        <section className="content-section">
          <h2>About Co-Founder</h2>
          <p>
            Find more on Ekara Financials and can contact on{" "}
            <a href="https://ekara.co.in/" className="green-link">ekara.co.in</a>
          </p>
        </section>
      </div>

      
    </div>
    <Footer/>
    </>
  );
}

export default About;
