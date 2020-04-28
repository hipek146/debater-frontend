import React from "react";
import "./Debates.css";

export const Debates = (props) => {
  //const {debates} = props;

  const debates = [
    {
      name: "Debata 1",
      link: "link1",
    },
    {
      name: "Debata 2",
      link: "link2",
    },
    {
      name: "Debata 3",
      link: "link3",
      my: true,
    },
  ];

  return (
    <div className="Debates">
      {debates.map((debate, i) => (
        <div className="Debates-flex">
          {debate.my && <div className="Debates-mine">Moja debata</div>}
          <div className="Debates-name">{debate.name}</div>
        </div>
      ))}
    </div>
  );
};
