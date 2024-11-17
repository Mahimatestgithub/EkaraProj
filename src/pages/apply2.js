import React from "react";

import '../styles/apply2.css'; // Import your CSS file

function Apply2() {
  return (
    <div>
      <main>
        <h1>Apply to this program</h1>

        <section className="form-section">
          <h2>Founders</h2>
          <form>
            <textarea placeholder="Enter your response here"></textarea>

            <label htmlFor="founders-info">Email address</label>
            <textarea id="founders-info" placeholder="Enter your response here"></textarea>

            <label htmlFor="technical-work">LinkedIn Profile</label>
            <textarea id="technical-work" placeholder="Enter your response here"></textarea>

            <label htmlFor="phone-number">Phone number</label>
            <textarea id="phone-number" placeholder="Enter your response here"></textarea>

            <label htmlFor="education-background">What is your educational background? (include degrees and institutions)</label>
            <textarea id="education-background" placeholder="Enter your response here"></textarea>

            <label htmlFor="experience">What significant past experience do you have relevant to this startup?</label>
            <textarea id="experience" placeholder="Enter your response here"></textarea>
          </form>

          <div className="founder-video">
            <h2>Founder Video</h2>
            <p>Record a one-minute video introducing the founder(s) (File size - not more than 100 MB)</p>
            <button className="upload-btn">Upload Video</button>
          </div> 

          <div className="founder-video">
            <p>If you have a product, attach a demo video below.</p>
            <p>Anything that shows us how the product works. Please limit to 3 minutes / 100 MB</p>
            <button className="upload-btn">Upload Video</button>
          </div> 
        </section>

        <button className="submit-button">Submit</button>
      </main>
    </div>
  );
}

export default Apply2;
