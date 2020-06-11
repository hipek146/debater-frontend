import React, { useState, useEffect } from "react";
import { NavBar } from "components/NavBar";
import { Link } from "react-router-dom";
import { Header } from "components/Header";
import "./FinishedTournaments.css";

import { fetchData } from "functions/fetchData";

export const FinishedTournaments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("zakonczone turnieje", setData);
  }, []);

  return (
    <div style={{ background: "#ececec", overflow: "auto", minHeight: "100%" }}>
      <NavBar relative />
      <div className="FinishedTournaments">
        <Header idName="zakonczone-turnieje" name="ZAKOŃCZONE<br>TURNIEJE" />
        <div className="FinishedTournaments-content">
          {data &&
            data.map((element, i) => (
              <div className="FinishedTournaments-tournament" key={i}>
                <Link
                  className="FinishedTournaments-headerLink"
                  to={"/" + element.link}
                >
                  <div className="FinishedTournaments-header">
                    {element.name}
                  </div>
                </Link>
                <div className="FinishedTournaments-bottom">
                  <Link to={"/" + element.link}>
                    <div className="FinishedTournaments-button">Zobacz</div>
                  </Link>
                  <Link to={"/" + element.link + "/punkty-i-wyniki"}>
                    <div className="FinishedTournaments-button">
                      Punkty i wyniki
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
