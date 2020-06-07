import React from "react";
import Vector1 from "assets/images/Vector 1.svg";
import Vector2 from "assets/images/Vector 2.svg";
import "./Header.css";

export const Header = (props) => {
  return (
    <div className="Header-header" id={props.idName}>
      <div className="Header-headerWrapper">
        <img className="Header-leftVector" src={Vector1} alt="L" />
        <div
          className="Header-name"
          dangerouslySetInnerHTML={{ __html: props.name }}
        ></div>
        <img className="Header-rightVector" src={Vector2} alt="|" />
      </div>
    </div>
  );
};
