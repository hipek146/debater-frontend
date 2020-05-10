import React, { useState, useEffect } from "react";
import "participant/Tournament.css";
import { NavBar } from "components/NavBar";
import { Debates } from "participant/Debates";
//import "./ArchitectScreen.css";
import avatar from "assets/images/avatar.jpg";

import { fetchData } from "functions/fetchData";

export const ArchitectScreen = () => {
  const [data, setData] = useState({});
/*
  useEffect(() => {
    fetchData("konto", setData);
  }, []);
*/
  return (
    <>
      <NavBar />
      <div className="ArchitectScreen">
        <div className="ArchitectScreen-main">
          <div className="ArchitectScreen-top">
            <img src={avatar} alt="avatar" />
            <div className="ArchitectScreen-label">
              <div className="ArchitectScreen-column">
                <div>IMIĘ: </div>
                <div>NAZWISKO:</div>
                <div>EMAIL: </div>
              </div>
              <div className="ArchitectScreen-column">
                <div>{data.firstName}</div>
                <div>{data.lastName}</div>
                <div>{data.email}</div>
              </div>
            </div>
            <div className="ArchitectScreen-right ArchitectScreen-alignRight">
              <div>
                <div>MOJA DRUŻYNA:</div>
                <div className="ArchitectScreen-alignRight">{data.teamName}</div>
              </div>
              <div>
                <div>ZDOBYTE PUNKTY:</div>
                <div className="ArchitectScreen-alignRight">{data.points}</div>
              </div>
            </div>
          </div>
          <div className="ArchitectScreen-debatesHeader">MOJE DEBATY</div>
          <Debates debates={data.debates} />
        </div>
      </div>
    </>
  );
};
