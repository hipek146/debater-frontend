import React, { useState, useEffect } from "react";
import { NavBar } from "components/NavBar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "components/Header";
import map from "assets/images/map.jpg";
import "./NewTournament.css"
import {CenterWrapper} from "wrappers/CenterWrapper"

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
		  <CenterWrapper header="NAZWA TURNIEJU">
          <textarea
            value={data.name}
			style={style.nazwa}
            onChange={(event) => {
              setData({ ...data, name: event.target.value });
            }}
          />
		  </CenterWrapper>
		  
          <CenterWrapper header="MIEJSCE">
		  <div className="miejsce">
          <textarea
            value={data.place}
            onChange={(event) => {
              setData({ ...data, place: event.target.value });
            }}
          />
          <img src={map} alt="map" />
		  </div>
		  </CenterWrapper>
		  
          
            <CenterWrapper style={style.but} header="CZAS TRWANIA">
			<div className="czas">
			OD:&nbsp; &nbsp;  
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
			<br/><br/>
			DO:&nbsp; &nbsp;  
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
			</CenterWrapper>
          
        </div>
		<CenterWrapper header="STRUKTURA I ZASADY">
        <div className="Struktura">
        <textarea
          className="NewTournament-textarea"
          value={data.rules}
          onChange={(event) => {
            setData({ ...data, rules: event.target.value });
          }}
        />
        <label>
          <input
            type="checkbox"
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
            type="checkbox"
            name="phase"
            value="final"
            onChange={(event) => {
              setData({ ...data, phase: event.target.value });
            }}
          />
          Faza finałowa
        </label>
		</div>
		</CenterWrapper>
		<div style={style.but}>
          <div className="NewTournament-button"
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
	</div>
  );
};

const style = {
  but:
  { 
	 display: "flex",
	 justifyContent: "center",
	 padding: "30px"
  }
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { createMessage };

export const NewTournament = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTournamentComponent);
