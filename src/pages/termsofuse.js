import React from 'react';
import '../styles/termsofuse.css';
import Header from '../components/header'
import Footer from '../components/footer'
const TermsOfUse = () => {
    return (
        <>
        <Header/>
        <div className="main-content">
            <h1><span>Policies & Terms</span></h1>
            <hr />

            <section className="content-section">
                <h2>Terms of Use</h2>
                <p>Welcome to Ekara Financials. By accessing or using our website and services, you agree to abide by these Terms of Use, which govern your relationship with us and your use of our services.</p>
            </section>

            <section className="content-section">
                <h2>Acceptance of Terms</h2>
                <p>By accessing our site, you agree to comply with these Terms of Use and all applicable laws and regulations. If you do not agree, please do not use our services.</p>
            </section>

            <section className="content-section">
                <h2>Account Responsibilities</h2>
                <p>As a registered user, you are responsible for maintaining the confidentiality of your account information, including your password, and for all activities under your account.</p>
            </section>

            <section className="content-section">
                <h2>Prohibited Activities</h2>
                <p>Users are prohibited from using the site for any unlawful purpose, including, but not limited to, the transmission of harmful or offensive content, unauthorized access to our systems, or activities that interfere with the security of our services.</p>
            </section>

            <section className="content-section">
                <h2>Intellectual Property</h2>
                <p>All content on this site is the intellectual property of Ekara Financials and is protected by applicable copyright and trademark laws. You may not use, distribute, or modify any content without our explicit permission.</p>
            </section>

            <section className="content-section">
                <h2>Limitation of Liability</h2>
                <p>Ekara Financials is not liable for any damages arising from the use or inability to use the website or services, including any direct, indirect, incidental, or consequential damages.</p>
            </section>

            <section className="content-section">
                <h2>Changes to Terms</h2>
                <p>We reserve the right to modify these Terms of Use at any time. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of these changes.</p>
            </section>

            <section className="content-section">
                <h2>Contact Us</h2>
                <p>If you have any questions or need further information about these Terms of Use, please contact us at <a href="mailto:team@ekara.co.in" className="green-link">team@ekara.co.in</a>.</p>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default TermsOfUse;
