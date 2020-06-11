import React from "react";
import { NavBar } from "components/NavBar";
import { Title } from "participant/Title";
import { Tournaments } from "organizer/Tournaments";

export const OrganizerScreen = () => {
  return (
    <div style={{ background: "#ececec", overflow: "auto" }}>
      <NavBar />
      <Title />
      <Tournaments />
    </div>
  );
};
