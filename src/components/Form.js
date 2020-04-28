import React from "react";
import { connect } from "react-redux";
import "./Form.css";
import { logIn } from "actions";

export const FormComponent = (props) => {
  const { title, fields, button } = props;
  return (
    <div className="Form">
      <div className="Form-title">{title}</div>
      {Object.keys(fields).map((key) => (
        <input
          placeholder={fields[key].name}
          type={fields[key].type ? fields[key].type : "text"}
          key={key}
        />
      ))}
      <div className="Form-button" onClick={props.logIn}>
        {button}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { logIn };

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
