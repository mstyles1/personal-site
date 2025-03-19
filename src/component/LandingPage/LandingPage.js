import React from "react";
import {Link} from "react-router-dom";
import CodingPage from "../CodingPage/CodingPage";
import ContactPage from "../ContactPage/ContactPage";
import ComicsPage from "../ComicsPage/ComicsPage";
import profile from "../images/profile-photo.jpg";

const LandingPage = () => {
  return (
    <div className="content">
      {/* Welcome Container */}
        <h1 className="welcome-blurb">welcome to mattstyles.com</h1>
        <h2 className="welcome-blurb2">I write comics and code.</h2>

        {/* Profile Container */}
        <div className="profile">
        <p className="profile-blurb">Thanks for visiting my site! I'm a Knoxville-based creative with skills in both web development and creative writing. As a certified front-end and back-end developer, I'm driven to build clean, user and collaborator-friendly websites. You can take a shortcut to my portfolio via the <Link to="/coding" className="bold-link">coding</Link> tab. I have also published two sci-fi graphic novels with more on the way! Check out my books under the <Link to="/comics" className="bold-link">comics</Link> tab. Please feel free to reach out 
          with any inquiries via the <Link to="/contact" className="bold-link">contacts</Link> tab. From my dog Remy and I, have a wonderful day!</p> 
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

