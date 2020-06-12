import React, { useState } from "react";
import "./JudgesAndMarshals.css";

export const JudgesAndMarshals = (props) => {
  const { judges, marshals, edit, setEdit } = props;

  return edit ? (
    <JudgesAndMarshalsEdit {...props} />
  ) : (
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

const JudgesAndMarshalsEdit = (props) => {
  const { edit, setEdit } = props;
  const [judges, setJudges] = useState(props.judges);
  const [marshals, setMarshals] = useState(props.marshals);
  return (
    <>
      <div className="JudgesAndMarshals">
        <div className="JudgesAndMarshals-column">
          <div className="JudgesAndMarshals-title">Sędziowie</div>
          {judges &&
            judges.map((judge, i) => (
              <div key={i}>
                <input
                  value={judge}
                  onChange={(event) => {
                    let array = judges;
                    array[i] = event.target.value;
                    setJudges([...array]);
                  }}
                />
                <div className="App-button">USUŃ</div>
                <div className="App-button">WYŚLIJ LINK</div>
              </div>
            ))}
          <div className="App-button">DODAJ SĘDZIEGO</div>
        </div>
        <div className="JudgesAndMarshals-column">
          <div className="JudgesAndMarshals-title">Marszałkowie</div>
          {marshals &&
            marshals.map((marshal, i) => (
              <div key={i}>
                <input
                  value={marshal}
                  onChange={(event) => {
                    let array = marshals;
                    array[i] = event.target.value;
                    setMarshals([...array]);
                  }}
                />
                <div className="App-button">USUŃ</div>
                <div className="App-button">WYŚLIJ LINK</div>
              </div>
            ))}
          <div className="App-button">DODAJ MARSZAŁKA</div>
        </div>
      </div>
      <div className="App-button" onClick={() => setEdit(false)}>
        COFNIJ
      </div>
      <div className="App-button">ZAPISZ INFORMACJE</div>
    </>
  );
};
