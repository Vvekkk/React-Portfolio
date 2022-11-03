import React from "react";

import Navbar from "../components/Navbar";

import Footers from "../components/Footers";
import Heroimg2 from "../components/Heroimg2";

const First = (props) => {
  return (
    <div>
      <Navbar />
      <Heroimg2 />

      <div className="project-card">
        <div className="pro-details"></div>
      </div>

      <div className="pro-btnn2">
        <a
          href="https://github.com/Vvekkk/Jarvis/archive/refs/heads/main.zip"
          className="btn"
        >
          Download Jarvis Source Code
        </a>
      </div>

      <div className="pro-btnn2">
        <a
          href="https://github.com/Vvekkk/Jarvis.git"
          target="blank"
          className="btn"
        >
          Download Portfolio Source Code
        </a>
      </div>
      <Footers />
    </div>
  );
};

export default First;
