import React from "react";
import "./TimeAndPlace.css";
import map from "assets/images/map.jpg";

export const TimeAndPlace = () => {
  return (
    <div className="TimeAndPlace">
      <div className="TimeAndPlace-map">
        <img src={map} alt="map" />
      </div>
      <div className="TimeAndPlace-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
        metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
        Nam vel nulla consectetur, consectetur odio ac, pharetra eros.
      </div>
    </div>
  );
};
