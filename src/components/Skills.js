import "./Skills.css";
import "./WorkCardStyles.css";


import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";

import React from "react";

const Skills = () => {
  return (
    <div className="align-icon">
      <h1 className="project-heading">SKILLS</h1>
      <div className="icons-wrap">
        <div className="java-icon">
          <FaJava size={60} style={{ color: "#fff" }} />
          <h1
            style={{
              color: "gray",
              fontSize: "16px",
              marginLeft: "11px",
              marginTop: "5px",
            }}
          >
            JAVA
          </h1>
        </div>
        <div className="html-icon">
          <FaHtml5 size={60} style={{ color: "#fff" }} />
          <h1
            style={{
              color: "gray",
              fontSize: "16px",
              marginLeft: "6px",
              marginTop: "5px",
            }}
          >
            HTML5
          </h1>
        </div>
        <div className="css-icon">
          <FaCss3 size={60} style={{ color: "#fff" }} />
          <h1
            style={{
              color: "gray",
              fontSize: "16px",
              marginLeft: "12px",
              marginTop: "5px",
            }}
          >
            CSS
          </h1>
        </div>
        <div className="js-icon">
          <FaJs size={60} style={{ color: "#fff" }} />
          <h1
            style={{
              color: "gray",
              fontSize: "16px",
              marginLeft: "-8px",
              marginTop: "5px",
            }}
          >
            JAVASCRIPT
          </h1>
        </div>
        <div className="react-icon">
          <FaReact size={60} style={{ color: "#fff" }} />
          <h1
            style={{
              color: "gray",
              fontSize: "16px",
              marginLeft: "6px",
              marginTop: "5px",
            }}
          >
            REACT
          </h1>
        </div>
        <div className="python-icon">
          <FaPython size={60} style={{ color: "#fff" }} />
          <h1
            style={{
              color: "gray",
              fontSize: "16px",
              marginLeft: "1px",
              marginTop: "5px",
            }}
          >
            PYTHON
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
