import React from "react";
import "./Verdict.css";

export const Verdict = (props) => {
  const { teams } = props;

  return (
  
	<div className="Teams-flex">
                <div className="Teams-name">{teams[1].name}</div>
                {teams[0].participants.map((participant, i) => (
                  <div key={i}>{participant}</div>
                ))}
	</div>
  );
};

const backgrounds = ["#dedede", "#e0e0e0", "#e2e2e2", "#e4e4e4", "#e8e8e8"];

