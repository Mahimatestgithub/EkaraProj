import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls
import '../styles/apply2.css'; // Import your CSS file

function Apply2() {
  // States for form fields
  const [formData, setFormData] = useState({
    email: "",
    linkedIn: "",
    phoneNumber: "",
    educationBackground: "",
    experience: "",
  });

  const [founderVideo, setFounderVideo] = useState(null);
  const [demoVideo, setDemoVideo] = useState(null);

  // Handle text input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file uploads
  const handleFileChange = (e, type) => {
    if (type === "founderVideo") {
      setFounderVideo(e.target.files[0]);
    } else if (type === "demoVideo") {
      setDemoVideo(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for submission
    const data = new FormData();
    data.append("email", formData.email);
    data.append("linkedIn", formData.linkedIn);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("educationBackground", formData.educationBackground);
    data.append("experience", formData.experience);

    if (founderVideo) {
      data.append("founderVideo", founderVideo);
    }
    if (demoVideo) {
      data.append("demoVideo", demoVideo);
    }

    try {
      const token = sessionStorage.getItem('Authorization');
      if (!token) {
        alert("Session expired. Please login again.");
      }

      // API call to submit the form data
      const response = await axios.post("http://localhost:5000/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        },


      });

      if (response.status === 200) {
        alert("Application submitted successfully!");
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application. Please check your inputs and try again.");
    }
  };

  return (
    <div>
      <main>
        <h1>Apply to this program</h1>

        <section className="form-section">
          <h2>Founders</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <textarea
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your response here"
            ></textarea>

            <label htmlFor="linkedIn">LinkedIn Profile</label>
            <textarea
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              placeholder="Enter your response here"
            ></textarea>

            <label htmlFor="phoneNumber">Phone number</label>
            <textarea
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your response here"
            ></textarea>

            <label htmlFor="educationBackground">
              What is your educational background? (include degrees and institutions)
            </label>
            <textarea
              id="educationBackground"
              name="educationBackground"
              value={formData.educationBackground}
              onChange={handleChange}
              placeholder="Enter your response here"
            ></textarea>

            <label htmlFor="experience">
              What significant past experience do you have relevant to this startup?
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Enter your response here"
            ></textarea>

            <div className="founder-video">
              <h2>Founder Video</h2>
              <p>Record a one-minute video introducing the founder(s) (File size - not more than 100 MB)</p>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, "founderVideo")}
              />
            </div>

            <div className="founder-video">
              <p>If you have a product, attach a demo video below.</p>
              <p>Anything that shows us how the product works. Please limit to 3 minutes / 100 MB</p>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, "demoVideo")}
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Apply2;