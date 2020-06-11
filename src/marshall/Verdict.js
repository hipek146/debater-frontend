import React from "react";
import "./Verdict.css";

export const Verdict = (props) => {
  const { teams } = props;

  return (
    <div classname="Elements">
      {teams && (
      <div className="Element">
	    <div
          style={{
                ...style.teams,
                }}
        >
	  <div className="verdict-element">		
	    <div className="verdict-flex">
          <div className="verdict-name">{teams[0].name}</div>
                {teams[0].participants.map((participant, i) => (
                  <div key={i}>{participant}</div>
                ))}
	    </div>
	 </div>
	 
	 <div className="verdict-element">	
	   <input type="text"/>
	 </div>
	 
	 <div className="verdict-element">	
	   :
	 </div>
	 
	 <div className="verdict-element">	
	   <input type="text"/>
	 </div>
	 
	 <div className="verdict-element">	
	   <div className="verdict-flex">
         <div className="verdict-name">{teams[1].name}</div>
                {teams[1].participants.map((participant, i) => (
                  <div key={i}>{participant}</div>
                ))}
	   </div>
	 </div>
	</div>
	</div>
     )}
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
    flexDirection: "row",
    alignItems: "center",
	justifyContent: "center",
  },
};
