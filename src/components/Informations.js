import React from "react";

export const Informations = (props) => {
  const { content, edit, setEdit } = props;
  return edit ? (
    <>
      <textarea />
      <div className="App-button">ZAPISZ</div>
      <div className="App-button" onClick={() => setEdit(false)}>
        COFNIJ
      </div>
    </>
  ) : (
    <>{content}</>
  );
};
