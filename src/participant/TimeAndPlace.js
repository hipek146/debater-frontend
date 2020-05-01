import React from "react";
import "./TimeAndPlace.css";
import map from "assets/images/map.jpg";

export const TimeAndPlace = (props) => {
  const { content } = props;
  return (
    <div className="TimeAndPlace">
      <div className="TimeAndPlace-map">
        <img src={map} alt="map" />
      </div>
      <div className="TimeAndPlace-content">{content}</div>
    </div>
  );
};
