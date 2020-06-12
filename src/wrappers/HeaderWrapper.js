import React, { useState } from "react";
import "./HeaderWrapper.css";

export const HeaderWrapper = (props) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="HeadreWrapper-wrapper">
      <div className="HeadreWrapper">
        <div className="HeadreWrapper-header">
          <div dangerouslySetInnerHTML={{ __html: props.header }} />
          {props.organizer && (
            <div
              className="App-button HeadreWrapper-edit"
              onClick={() => setEdit(!edit)}
            >
              EDYTUJ
            </div>
          )}
        </div>
        <div className="HeadreWrapper-content">
          {React.cloneElement(props.children, { edit, setEdit })}
        </div>
      </div>
    </div>
  );
};
