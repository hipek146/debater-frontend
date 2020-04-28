import React from "react";
import { connect } from "react-redux";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { logOut } from "actions";

export const NavBarComponent = (props) => {
  return (
    <div className="NavBar">
      <div className="NavBar-Logo">
        <img
          className="NavBar-logo"
          src={process.env.PUBLIC_URL + "/data/images/logo.svg"}
          alt="logo"
        />
        Debater
      </div>
      <div className="NavBar-right">
        {props.user.logged ? (
          <>
            <Link to="/">
              <div className="NavBar-button">MOJE KONTO</div>
            </Link>
            <HashLink to="/#turniej">
              <div className="NavBar-button">TURNIEJ</div>
            </HashLink>
            <Link to="/" onClick={props.logOut}>
              <div className="NavBar-button">WYLOGUJ SIĘ</div>
            </Link>
          </>
        ) : (
          <>
            <Link to="rejestracja">
              <div className="NavBar-button">REJESTRACJA</div>
            </Link>
            <Link to="logowanie">
              <div className="NavBar-button">LOGOWANIE</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = { logOut };

export const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
