import React, { useState } from "react";
import "./Teams.css";

export const Teams = (props) => {
  const { teams, edit, setEdit } = props;

  return edit ? (
    <TeamsEdit {...props} />
  ) : (
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

const TeamsEdit = (props) => {
  const { teams, edit, setEdit } = props;
  const [team, setTeam] = useState(teams ? teams[0] : { name: "" });
  return (
    <div className="Teams">
      {teams && (
        <>
          <select onChange={(event) => setTeam(teams[event.target.value])}>
            {teams.map((el, i) => (
              <option value={i} key={i}>
                {el.name}
              </option>
            ))}
          </select>
          {team && (
            <div className="Teams-flex">
              <div className="Teams-name">{team.name}</div>
              {team.participants.map((participant, i) => (
                <div key={i}>
                  <input
                    value={participant}
                    onChange={(event) => {
                      let array = team.participants;
                      array[i] = event.target.value;
                      setTeam({ name: team.name, participants: [...array] });
                    }}
                  />
                  <div className="App-button">USUŃ</div>
                  <div className="App-button">WYŚLIJ LINK</div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <div className="App-button" onClick={() => setEdit(false)}>
        COFNIJ
      </div>
      <div className="App-button">ZAPISZ INFORMACJE</div>
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
