import React from "react";
import { NavBar } from "components/NavBar";
import { Title } from "participant/Title";
import { Tournament } from "participant/Tournament";

export const ParticipantScreen = () => {
  return (
    <div style={{ background: "#ececec", overflow: "auto" }}>
      <NavBar />
      <Title />
      <Tournament />
    </div>
  );
};
