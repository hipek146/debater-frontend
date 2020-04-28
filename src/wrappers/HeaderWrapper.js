import React from "react";
import "./HeaderWrapper.css";

export const HeaderWrapper = (props) => {
  return (
    <div className="HeadreWrapper-wrapper">
      <div className="HeadreWrapper">
        <div
          className="HeadreWrapper-header"
          dangerouslySetInnerHTML={{ __html: props.header }}
        ></div>
        <div className="HeadreWrapper-content">{props.children}</div>
      </div>
    </div>
  );
};
