import "./Heroimgstyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I,am Vivek Prasad</p>
        <h1>Frontend Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>

          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
