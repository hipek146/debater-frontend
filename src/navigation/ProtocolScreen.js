import React, { useState, useEffect } from "react";
import "participant/Tournament.css";
import { NavBar } from "components/NavBar";
import { HeaderWrapper } from "wrappers/HeaderWrapper";
import { TimeAndPlace } from "participant/TimeAndPlace";
import { JudgesAndMarshals } from "participant/JudgesAndMarshals";
import { Teams } from "participant/Teams";
import { AddFeedback } from "participant/AddFeedback";
import {Verdict} from "marshall/Verdict.js"

import { fetchData } from "functions/fetchData";

export const ProtocolScreen = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData("protokol", setData);
  }, []);

  return (
    <>
      <NavBar />
      <div style={style.main}>
        <div
          style={style.header}
          dangerouslySetInnerHTML={{ __html: data.name }}
        >
		</div>
		
		<HeaderWrapper header="DRUŻYNY">
          <Teams teams={data.teams} />
        </HeaderWrapper>

		<HeaderWrapper header="WERDYKTy">
	     <Verdict teams={data.teams}/>
          <textarea/>
		 
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
