import "./footerstyles.css";

import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footers = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kurseong-734203</p>
              <p>West Bengal</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8116136904{" "}
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              vvekshun@gmail.com{" "}
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Fresher</h4>
          <p>Ready to explore innovative roles to add to my experience</p>
          <div className="social">
            <a
              className="face-in"
              href="https://www.facebook.com"
              target="blank"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a className="git-btn" href="https://github.com" target="blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              className="link-in"
              href="https://www.linkedin.com/login"
              target="blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
