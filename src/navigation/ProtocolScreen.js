import React, { useState, useEffect } from "react";
import "participant/Tournament.css";
import { NavBar } from "components/NavBar";
import { HeaderWrapper } from "wrappers/HeaderWrapper";
import { TimeAndPlace } from "participant/TimeAndPlace";
import { JudgesAndMarshals } from "participant/JudgesAndMarshals";
import { Teams } from "participant/Teams";
import { AddFeedback } from "participant/AddFeedback";
import { AddProtocol } from "marshall/AddProtocol";
import { Verdict } from "marshall/Verdict.js";
import { createMessage } from "actions";
import { CenterWrapper } from "wrappers/CenterWrapper";

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
        ></div>

        <CenterWrapper header="WERDYKT">
          <Verdict teams={data.teams} />
        </CenterWrapper>

        <CenterWrapper header="INNE PUNKTY">
          <div style={style.header}>
            <div style={style.areas}>
              <textarea style={style.txt} />
            </div>
            <div style={style.areas}>
              <textarea style={style.txt} />
            </div>
          </div>
        </CenterWrapper>

        <CenterWrapper header="DODATKOWE INFORMACJE">
          <textarea style={style.bigarea} />
        </CenterWrapper>

        <div style={style.div}>
          <AddProtocol />
        </div>
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
  bigarea: {
    width: "900px",
    height: "150px",
    resize: "none",
  },
  txt: {
    width: "450px",
    height: "150px",
    resize: "none",
  },
  areas: {
    padding: "50px",
  },
  div: {
    paddingTop: "50px",
    paddingBottom: "50px",
  },
};
