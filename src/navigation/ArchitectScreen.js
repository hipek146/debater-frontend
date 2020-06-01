import React, { useState, useEffect } from "react";
import "participant/Tournament.css";
import { connect } from "react-redux";
import { NavBar } from "components/NavBar";
import { Debates } from "participant/Debates";
//import "./ArchitectScreen.css";
import avatar from "assets/images/avatar.jpg";

import { fetchData } from "functions/fetchData";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { logOut } from "actions";

export const ArchitectScreen = (props) => {
  const [data, setData] = useState({});
  return (
    <>
      <NavBar />
      <div className="ArchitectScreen">
        <div className="ArchitectScreen-main">
        <>
        <Link to="/" className="NavBar-button" onClick={props.logOut}>
              STWÓRZ NOWY TURNIEJ
        </Link>
        </>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = { logOut };
/*
export const ArchitectScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchitectScreenComponent);
*/