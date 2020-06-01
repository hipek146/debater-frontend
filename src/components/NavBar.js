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
            <Link className="NavBar-button" to="/konto">
              MOJE KONTO
            </Link>
            <HashLink className="NavBar-button" to="/#turniej">
              TURNIEJ
            </HashLink>
            <Link to="/" className="NavBar-button" onClick={props.logOut}>
              WYLOGUJ SIĘ
            </Link>
          </>
        ) : (
          <>
            <Link className="NavBar-button" to="rejestracja">
              REJESTRACJA
            </Link>
            <Link className="NavBar-button" to="logowanie">
              LOGOWANIE
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
