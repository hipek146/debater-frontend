import React, { useState, useEffect } from "react";
import "./Tournament.css";
import { HeaderWrapper } from "wrappers/HeaderWrapper";
import { Informations } from "components/Informations";
import { TimeAndPlace } from "participant/TimeAndPlace";
import { JudgesAndMarshals } from "participant/JudgesAndMarshals";
import { Teams } from "participant/Teams";
import { Debates } from "participant/Debates";
import { Links } from "participant/Links";
import { Header } from "components/Header";

import { fetchData } from "functions/fetchData";

export const Tournament = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData("turniej", setData);
  }, []);

  return (
    <>
      {/* <div className="Tournament-header" id="turniej">
        <div className="Tournament-headerWrapper">
          <img className="Tournament-leftVector" src={Vector1} alt="L" />
          <div
            className="Tournament-name"
            dangerouslySetInnerHTML={{ __html: data.name }}
          ></div>
          <img className="Tournament-rightVector" src={Vector2} alt="|" />
        </div>
      </div> */}
      <Header idName="turniej" name={data.name} />

      <HeaderWrapper header="INFORMACJE <br /> O TURNIEJU">
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

      <HeaderWrapper header="PRZYSZŁE <br /> DEBATY">
        <Debates debates={data.upcomingDebates} />
      </HeaderWrapper>

      <HeaderWrapper header="ZAKOŃCZONE <br /> DEBATY">
        <Debates debates={data.pastDebates} />
      </HeaderWrapper>

      <HeaderWrapper header="WYNIKI">
        <Informations content={data.result} />
      </HeaderWrapper>

      <HeaderWrapper header="PLIKI <br /> DO POBRANIA">
        <Links links={data.links} />
      </HeaderWrapper>
    </>
  );
};
