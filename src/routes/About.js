import React from "react";

import Navbar from "../components/Navbar";

import Footers from "../components/Footers";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="ABOUT"
        text="Fresher curious about Frontend Development."
      />
      <AboutContent />
      <Footers />
    </div>
  );
};

export default About;
