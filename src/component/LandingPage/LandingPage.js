import React from "react";
import CodingPage from "../CodingPage/CodingPage";
import ContactPage from "../ContactPage/ContactPage";
import ComicsPage from "../ComicsPage/ComicsPage";
import profile from "../images/profile-photo.jpg";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6 content">
    {/* Hero Section */}
<div className="mb-10">
  <h1 className="text-4xl font-bold text-center welcome-blurb">welcome to mattstyles.com</h1>

  {/* Profile Container */}
  <div className="flex items-center justify-center gap-4 mt-2 flex-nowrap">
    <img 
      src={profile} 
      alt="Profile" 
      className="rounded-full shadow-md profile-photo"
      style={{ width: "120px" }}
    />
    <p className="text-lg text-gray-600 profile-blurb">I write code and comics.</p>
  </div>
</div>



      {/* About Section */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-700">
          [Write a short, engaging bio about yourself. Mention your background, interests, and passions.]
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <p className="text-gray-700">React | JavaScript | Node.js | MySQL | CSS | [Other Skills]</p>
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

