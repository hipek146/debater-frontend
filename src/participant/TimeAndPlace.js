import React from "react";
import "./TimeAndPlace.css";
import map from "assets/images/map.jpg";

export const TimeAndPlace = (props) => {
  const { content, edit, setEdit } = props;
  return edit ? (
    <>
      <textarea />
      <div className="App-button">ZAPISZ</div>
      <div className="App-button" onClick={() => setEdit(false)}>
        COFNIJ
      </div>
    </>
  ) : (
    <div className="TimeAndPlace">
      <div className="TimeAndPlace-map">
        <img src={map} alt="map" />
      </div>
      <div className="TimeAndPlace-content">{content}</div>
    </div>
  );
};
