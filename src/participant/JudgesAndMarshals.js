import React from "react";
import "./JudgesAndMarshals.css";

export const JudgesAndMarshals = (props) => {
  //const {judges, marshals} = props;

  const judges = [
    "John Stone",
    "Ponnappa Priya",
    "Mia Wong",
    "Peter Stanbridge",
    "Natalie Lee-Walsh",
  ];
  const marshals = ["Ang Lie", "Nguta Ithya", "Tamzyn French"];

  return (
    <div className="JudgesAndMarshals">
      <div className="JudgesAndMarshals-column">
        <div className="JudgesAndMarshals-title">Sędziowie</div>
        {judges.map((judge, i) => (
          <div key={i}>{judge}</div>
        ))}
      </div>
      <div className="JudgesAndMarshals-column">
        <div className="JudgesAndMarshals-title">Marszałkowie</div>
        {marshals.map((marshal, i) => (
          <div key={i}>{marshal}</div>
        ))}
      </div>
    </div>
  );
};
