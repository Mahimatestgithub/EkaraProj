import React from 'react';
import '../styles/privacy.css';

const Privacy = () => {
  return (
    <div className="main-content">
      <h1><span>Legal</span></h1>
      <hr />

      <section className="content-section">
        <h2>Privacy Policy</h2>
        <p>
          Welcome to the Ekara Financials website. Your privacy is important to us, and this Privacy Policy outlines how we collect, use, and protect your personal information. We are dedicated to ensuring that your data remains secure and that you remain informed about your rights and our practices.
        </p>
      </section>

      <section className="content-section">
        <h2>Data Collection and Usage</h2>
        <p>
          We collect personal information that you voluntarily provide when using the Site or Services. This information is used solely for providing, improving, and personalizing the Services offered by Ekara Financials.
        </p>
      </section>

      <section className="content-section">
        <h2>Security of Your Information</h2>
        <p>
          We prioritize data security and use advanced technical measures to ensure your data is secure from unauthorized access, disclosure, and alteration. Ekara Financials does not permit access to your information by third-party users unless explicitly authorized by you.
        </p>
      </section>

      <section className="content-section">
        <h2>Information We Share</h2>
        <p>
          Ekara Financials does not sell, rent, or otherwise share your personal information with any third parties for their independent use without your consent, except as required by law or for legitimate business operations with trusted partners.
        </p>
      </section>

      <section className="content-section">
        <h2>Use of Cookies</h2>
        <p>
          We use cookies and similar technologies to enhance your experience on our Site. You can control your cookie preferences, but certain features of the Site may not function optimally if cookies are disabled.
        </p>
      </section>

      <section className="content-section">
        <h2>Retention of Information</h2>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes for which it was collected or as required by law. You may request the deletion of your data at any time by contacting us.
        </p>
      </section>

      <section className="content-section">
        <h2>Questions about the Privacy Policy</h2>
        <p>
          If you have any questions about our Privacy Policy, information practices, or need to access this Privacy Policy in a different format, please contact the Ekara Financials legal team at <a href="mailto:team@ekara.co.in">team@ekara.co.in</a>.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
