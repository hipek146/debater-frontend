import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Tournament.css";
import { HeaderWrapper as HeaderWrapperComponent } from "wrappers/HeaderWrapper";
import { Informations } from "components/Informations";
import { TimeAndPlace } from "participant/TimeAndPlace";
import { JudgesAndMarshals } from "participant/JudgesAndMarshals";
import { Teams } from "participant/Teams";
import { Debates } from "participant/Debates";
import { Links } from "participant/Links";
import { Header } from "components/Header";

import { fetchData } from "functions/fetchData";
import { findByLabelText } from "@testing-library/react";

import { createMessage } from "actions";

const TournamentComponent = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData("turniej", setData);
  }, []);

  const HeaderWrapper = props.organizer
    ? (props) => <HeaderWrapperComponent organizer {...props} />
    : HeaderWrapperComponent;

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

      <HeaderWrapper header="PRZYSZŁE <br /> DEBATY" organizer={false}>
        <Debates debates={data.upcomingDebates} />
      </HeaderWrapper>

      <HeaderWrapper header="ZAKOŃCZONE <br /> DEBATY" organizer={false}>
        <Debates debates={data.pastDebates} />
      </HeaderWrapper>

      <HeaderWrapper header="WYNIKI">
        <Informations content={data.result} />
      </HeaderWrapper>

      <HeaderWrapper header="PLIKI <br /> DO POBRANIA">
        <Links links={data.links} />
      </HeaderWrapper>

      {props.organizer && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <div
            className="App-button"
            onClick={() =>
              props.createMessage({
                title: "Turniej został zakończony",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur
  metus vitae mi elementum porta. Vestibulum cursus in turpis eu accumsan.
  Nam vel nulla consectetur, consectetur odio ac, pharetra eros.`,
              })
            }
          >
            ZAKOŃCZ TURNIEJ
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { createMessage };

export const Tournament = connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentComponent);
