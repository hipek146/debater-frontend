import React from "react";
import "./Tournament.css";
import { HeaderWrapper } from "wrappers/HeaderWrapper";
import { Informations } from "components/Informations";
import { TimeAndPlace } from "participant/TimeAndPlace";
import { JudgesAndMarshals } from "participant/JudgesAndMarshals";
import { Teams } from "participant/Teams";
import { Debates } from "participant/Debates";
import { Links } from "participant/Links";

import Vector1 from "assets/images/Vector 1.svg";
import Vector2 from "assets/images/Vector 2.svg";

export const Tournament = () => {
  return (
    <>
      <div className="Tournament-header" id="turniej">
        <div className="Tournament-headerWrapper">
          <img className="Tournament-leftVector" src={Vector1} alt="L" />
          <div className="Tournament-name">
            NAZWA <br /> TURNIEJU
          </div>
          <img className="Tournament-rightVector" src={Vector2} alt="|" />
        </div>
      </div>

      <HeaderWrapper header="INFORMACJE <br /> O TURNIEJU">
        <Informations />
      </HeaderWrapper>

      <HeaderWrapper header="CZAS <br /> I MIEJSCE">
        <TimeAndPlace />
      </HeaderWrapper>

      <HeaderWrapper header="SĘDZIOWIE <br /> I MARSZAŁKOWIE">
        <JudgesAndMarshals />
      </HeaderWrapper>

      <HeaderWrapper header="DRUŻYNY">
        <Teams />
      </HeaderWrapper>

      <HeaderWrapper header="PRZYSZŁE <br /> DEBATY">
        <Debates />
      </HeaderWrapper>

      <HeaderWrapper header="ZAKOŃCZONE <br /> DEBATY">
        <Debates />
      </HeaderWrapper>

      <HeaderWrapper header="WYNIKI">
        <Informations />
      </HeaderWrapper>

      <HeaderWrapper header="PLIKI <br /> DO POBRANIA">
        <Links />
      </HeaderWrapper>
    </>
  );
};
