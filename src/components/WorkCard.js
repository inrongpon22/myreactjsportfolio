import "./WorkCardStyles.css";

import React from "react";
// import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  console.log(props);

  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="images" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-detail">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} rel="noreferrer" className="btn" target="_blank">
            View
          </a>
          <a href={props.source} rel="noreferrer" className="btn" target="_blank">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
