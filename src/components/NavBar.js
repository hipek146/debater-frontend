import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-Logo">
        <img className="NavBar-logo" src="/data/images/logo.svg" alt="logo" />
        Debater
      </div>
      <div className="NavBar-right">
        <div className="NavBar-button">REJESTRACJA</div>
        <div className="NavBar-button">LOGOWANIE</div>
      </div>
    </div>
  );
};
