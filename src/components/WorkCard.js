import "./WorkCardStyles.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Jarvis" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a
            href="https://github.com/Vvekkk/Jarvis.git"
            target="blank"
            className="btn"
          >
            View
          </a>
          <a href="/First" className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
