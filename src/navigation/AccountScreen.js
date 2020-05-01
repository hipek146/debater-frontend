import React, { useState, useEffect } from "react";
import "participant/Tournament.css";
import { NavBar } from "components/NavBar";
import { Debates } from "participant/Debates";
import "./AccountScreen.css";
import avatar from "assets/images/avatar.jpg";

import { fetchData } from "functions/fetchData";

export const AccountScreen = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData("konto", setData);
  }, []);

  return (
    <>
      <NavBar />
      <div className="AccountScreen">
        <div className="AccountScreen-main">
          <div className="AccountScreen-top">
            <img src={avatar} alt="avatar" />
            <div className="AccountScreen-label">
              <div className="AccountScreen-column">
                <div>IMIĘ: </div>
                <div>NAZWISKO:</div>
                <div>EMAIL: </div>
              </div>
              <div className="AccountScreen-column">
                <div>{data.firstName}</div>
                <div>{data.lastName}</div>
                <div>{data.email}</div>
              </div>
            </div>
            <div className="AccountScreen-right AccountScreen-alignRight">
              <div>
                <div>MOJA DRUŻYNA:</div>
                <div className="AccountScreen-alignRight">{data.teamName}</div>
              </div>
              <div>
                <div>ZDOBYTE PUNKTY:</div>
                <div className="AccountScreen-alignRight">{data.points}</div>
              </div>
            </div>
          </div>
          <div className="AccountScreen-debatesHeader">MOJE DEBATY</div>
          <Debates debates={data.debates} />
        </div>
      </div>
    </>
  );
};
