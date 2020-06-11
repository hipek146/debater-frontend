import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "participant/Tournament.css";
import { NavBar } from "components/NavBar";
import { HeaderWrapper } from "wrappers/HeaderWrapper";
import { Informations } from "components/Informations";
import { TimeAndPlace } from "participant/TimeAndPlace";
import { JudgesAndMarshals } from "participant/JudgesAndMarshals";
import { Teams } from "participant/Teams";
import { AddFeedback } from "participant/AddFeedback";
import { useParams } from "react-router-dom";

import { fetchData } from "functions/fetchData";

export const DebateScreen = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({});

  useEffect(() => {
    fetchData("debata", setData);
  }, []);

  return (
    <>
      <NavBar />
      <div style={style.main}>
        <div
          style={style.header}
          dangerouslySetInnerHTML={{ __html: data.name }}
        ></div>
		
		<HeaderWrapper>
		<div style = {style.header} className="protocol-link">
			<Link to="/protokol">
              DODAJ PROTOKÓŁ Z DEBATY
			</Link>
		</div>
		</HeaderWrapper>

        <HeaderWrapper header="INFORMACJE <br /> O DEBACIE">
          <Informations content={data.informations} />
        </HeaderWrapper>

        <HeaderWrapper header="CZAS <br /> I MIEJSCE">
          <TimeAndPlace content={data.timeAndPlace} />
        </HeaderWrapper>

        <HeaderWrapper header="SĘDZIOWIE <br /> I MARSZAŁKOWIE">
          <JudgesAndMarshals judges={data.judges} marshals={data.marshals} />
        </HeaderWrapper>

        <HeaderWrapper header="DRUŻYNY">
          <Teams teams={data.teams} />
        </HeaderWrapper>

        <HeaderWrapper header="WYNIKI">
          <Informations content={data.result} />
        </HeaderWrapper>

        <HeaderWrapper header="DODAJ FEEDBACK">
          <AddFeedback />
        </HeaderWrapper>
      </div>
    </>
  );
};

const style = {
  main: {
    background: "#ececec",
    overflow: "auto",
    boxSizing: "border-box",
    paddingTop: "104px",
    minHeight: "100%",
  },
  header: {
    width: "100%",
    minHeight: "140px",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    fontWeight: "600",
    fontSize: "24px",

    color: "#343434",
  },
};
