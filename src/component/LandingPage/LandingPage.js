import React from "react";
import CodingPage from "../CodingPage/CodingPage";
import ContactPage from "../ContactPage/ContactPage";
import ComicsPage from "../ComicsPage/ComicsPage";
import profile from "../images/profile-photo.jpg";

const LandingPage = () => {
  return (
    <div className="content">
      {/* Welcome Container */}
        <h1 className="welcome-blurb">welcome to mattstyles.com</h1>

        {/* Profile Container */}
        <div className="profile">
        <p className="profile-blurb">I write code and comics.</p> 
          <img 
            src={profile} 
            alt="Profile" 
            className="profile-photo"
          />
      </div>

      {/* Coding Section */}
      <CodingPage/>

      {/* Comics Section */}
      <ComicsPage/>

      {/* Contact Section */}
      <ContactPage/>
    </div>
  );
};

export default LandingPage;

