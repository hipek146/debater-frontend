import React from "react";
import { Link } from "react-router-dom";
import "./Debates.css";

export const Debates = (props) => {
  const { debates } = props;

  return (
    <div className="Debates">
      {debates &&
        debates.map((debate, i) => {
          let header;
          if (debate.my) header = "MOJA DEBATA";
          else if (debate.upcoming) header = "PRZYSZŁA DEBATA";
          else if (debate.past) header = "ZAKOŃCZONA DEBATA";
          return (
            <Link to={"/debata/" + debate.link} key={i}>
              <div className="Debates-flex">
                {header && <div className="Debates-mine">{header}</div>}
                <div className="Debates-name">{debate.name}</div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};
