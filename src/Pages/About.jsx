import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <h1>About Ambula</h1>
      <p>Building a healthier India, together!</p>
      <div className="info-container">
        <div className="info-item">
          <h3>Technology, Information, and Internet</h3>
          <p>
            Ambula is dedicated to leveraging the power of technology, information, and the internet to improve healthcare accessibility and outcomes in India.
          </p>
        </div>
        <div className="info-item">
          <h3>Location</h3>
          <p>Bhubaneswar, Odisha</p>
        </div>
        <div className="info-item">
          <h3>Team has</h3>
          <p>9 employees</p>
        </div>
      </div>
    </div>
  );
};

export default About;