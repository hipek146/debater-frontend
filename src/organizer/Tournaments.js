import React from "react";
import { Link } from "react-router-dom";
import "./Tournaments.css";
import { CenterWrapper } from "wrappers/CenterWrapper";

export const Tournaments = () => {
  const data = {
    "nowy-turniej": "NOWY TURNIEJ",
    "aktualne-turnieje": "AKTUALNE TURNIEJE",
    "zakonczone-turnieje": "ZAKOŃCZONE TURNIEJE",
  };
  return (
   <div style={style.main}>
    <div className="Tournaments-header" id="turnieje">
      {Object.keys(data).map((key, i) => (
        <Link key={i} to={"/" + key}>
		  <CenterWrapper>
          <div style={style.buttontext} className="Tournaments-button">{data[key]}</div>
		  </CenterWrapper>
        </Link>
      ))}
    </div>
	</div>
  );
};

const style = {
  main: {
    background: "#ececec",
    overflow: "auto",
    boxSizing: "border-box",
    paddingTop: "104px",
    minHeight: "100%",
	textDecoration: "none"
  },
  buttontext:
  {
	  textDecoration: "none"
  }
}