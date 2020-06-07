import React, { useState, useEffect } from "react";
import { NavBar } from "components/NavBar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "components/Header";
import map from "assets/images/map.jpg";

import { createMessage } from "actions";
import { fetchData } from "functions/fetchData";

export const NewTournamentComponent = (props) => {
  const [data, setData] = useState({
    name: "",
    place: "",
    time: "",
    date: "",
    rules: "",
    phase: "",
  });

  return (
    <div style={{ background: "#ececec", overflow: "auto", minHeight: "100%" }}>
      <NavBar relative />
      <div className="NewTournament">
        <Header idName="nowy-turniej" name="NOWY<br>TURNIEJ" />
        <div className="NewTournament-content">
          <div className="NewTournament-left"></div>
          <div className="NewTournament-label">NAZWA TURNIEJU</div>
          <input
            value={data.name}
            onChange={(event) => {
              setData({ ...data, name: event.target.value });
            }}
          />
          <div className="NewTournament-label">MIEJSCE</div>
          <input
            value={data.place}
            onChange={(event) => {
              setData({ ...data, place: event.target.value });
            }}
          />
          <img src={map} alt="map" />
          <div className="NewTournament-right">
            <div className="NewTournament-label">CZAS TRWANIA</div>
            <input
              type="time"
              value={data.time}
              onChange={(event) => {
                setData({ ...data, time: event.target.value });
              }}
            />
            <input
              type="date"
              value={data.date}
              onChange={(event) => {
                setData({ ...data, date: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="NewTournament-label">Struktura i zasady</div>
        <textarea
          className="NewTournament-textarea"
          value={data.rules}
          onChange={(event) => {
            setData({ ...data, rules: event.target.value });
          }}
        />
        <label>
          <input
            type="radio"
            name="phase"
            value="group"
            onChange={(event) => {
              setData({ ...data, phase: event.target.value });
            }}
          />
          Faza grupowa
        </label>
        <label>
          <input
            type="radio"
            name="phase"
            value="final"
            onChange={(event) => {
              setData({ ...data, phase: event.target.value });
            }}
          />
          Faza finałowa
        </label>
        <div
          className="NewTournament-button"
          onClick={() => {
            props.createMessage({
              title: "Stworzono turniej",
              content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
  metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
  Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,
            });
            console.log(data);
          }}
        >
          STWÓRZ TURNIEJ
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { createMessage };

export const NewTournament = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTournamentComponent);
