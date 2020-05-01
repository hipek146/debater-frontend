import React from "react";
import "./Teams.css";

export const Teams = (props) => {
  const { teams } = props;

  return (
    <div className="Teams">
      {teams &&
        teams.map((team, i) => (
          <div className="Teams-team" key={i}>
            <div
              style={{
                ...style.teams,
                background:
                  backgrounds[Math.floor(Math.random() * backgrounds.length)],
              }}
            >
              <div className="Teams-flex">
                <div className="Teams-name">{team.name}</div>
                {team.participants.map((participant, i) => (
                  <div key={i}>{participant}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const backgrounds = ["#dedede", "#e0e0e0", "#e2e2e2", "#e4e4e4", "#e8e8e8"];

const style = {
  teams: {
    padding: "15px",
    paddingTop: "40px",
    paddingBottom: "45px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
