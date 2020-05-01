import React from "react";
import "./JudgesAndMarshals.css";

export const JudgesAndMarshals = (props) => {
  const { judges, marshals } = props;

  return (
    <div className="JudgesAndMarshals">
      <div className="JudgesAndMarshals-column">
        <div className="JudgesAndMarshals-title">Sędziowie</div>
        {judges && judges.map((judge, i) => <div key={i}>{judge}</div>)}
      </div>
      <div className="JudgesAndMarshals-column">
        <div className="JudgesAndMarshals-title">Marszałkowie</div>
        {marshals && marshals.map((marshal, i) => <div key={i}>{marshal}</div>)}
      </div>
    </div>
  );
};
