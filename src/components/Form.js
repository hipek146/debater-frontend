import React, { useState } from "react";
import { connect } from "react-redux";
import "./Form.css";
import { logIn } from "actions";

export const Form = (props) => {
  const { title, fields, button, callback } = props;

  const [value, setValue] = useState({});

  return (
    <div className="Form">
      <div className="Form-title">{title}</div>
      {Object.keys(fields).map((key) => (
        <input
          placeholder={fields[key].name}
          type={fields[key].type ? fields[key].type : "text"}
          value={value[key]}
          onChange={(event) => {
            setValue({ ...value, key: event.target.value });
          }}
          key={key}
        />
      ))}
      <div
        className="Form-button"
        onClick={() => {
          callback(value);
        }}
      >
        {button}
      </div>
    </div>
  );
};
