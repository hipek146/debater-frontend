import React from "react";
import { Link } from "react-router-dom";

export const Tournaments = () => {
  const data = {
    "nowy-turniej": "NOWY TURNIEJ",
    "aktualne-turnieje": "AKTUALNE TURNIEJE",
    "zakonczone-turnieje": "ZAKOŃCZONE TURNIEJE",
  };
  return (
    <div className="Tournaments-header" id="turnieje">
      {Object.keys(data).map((key, i) => (
        <Link key={i} to={"/" + key}>
          <div className="Tournaments-button">{data[key]}</div>
        </Link>
      ))}
    </div>
  );
};
