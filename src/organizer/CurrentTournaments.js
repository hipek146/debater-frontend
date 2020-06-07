import React, { useState, useEffect } from "react";
import { NavBar } from "components/NavBar";
import { Link } from "react-router-dom";
import { Header } from "components/Header";

import { fetchData } from "functions/fetchData";

export const CurrentTournaments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("aktualne turnieje", setData);
  }, []);

  return (
    <div style={{ background: "#ececec", overflow: "auto", minHeight: "100%" }}>
      <NavBar relative />
      <div className="CurrentTournaments">
        <Header idName="aktualne-turnieje" name="AKTUALNE<br>TURNIEJE" />
        <div className="CurrentTournaments-content">
          {data &&
            data.map((element, i) => (
              <div className="CurrentTournaments-tournament" key={i}>
                <Link
                  className="CurrentTournaments-headerLink"
                  to={"/" + element.link}
                >
                  <div className="CurrentTournaments-header">
                    {element.name}
                  </div>
                </Link>
                <div className="CurrentTournaments-bottom">
                  <Link to={"/" + element.link + "/dodaj-sedziow-i-marszalkow"}>
                    <div className="CurrentTournaments-button">
                      Dodaj sędziów i marszałków
                    </div>
                  </Link>
                  <Link to={"/" + element.link + "/dodaj-druzyny"}>
                    <div className="CurrentTournaments-button">
                      Dodaj drużyny
                    </div>
                  </Link>
                  <Link to={"/" + element.link + "/dodaj-debaty"}>
                    <div className="CurrentTournaments-button">
                      Dodaj debaty
                    </div>
                  </Link>
                  <Link to={"/" + element.link + "/punkty-i-wyniki"}>
                    <div className="CurrentTournaments-button">
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
