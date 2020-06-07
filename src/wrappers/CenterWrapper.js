import React from "react";
import "./CenterWrapper.css";

export const CenterWrapper = (props) => {
  return (
    <div className="CenterWrapper-wrapper">
      <div className="CenterWrapper">
        <div
          className="CenterWrapper-header"
          dangerouslySetInnerHTML={{ __html: props.header }}
        ></div>
        <div className="CenterWrapper-content">{props.children}</div>
      </div>
    </div>
  );
};
