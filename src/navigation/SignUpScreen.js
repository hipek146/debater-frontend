import React from "react";
import { Form } from "components/Form";
import { connect } from "react-redux";
import { logIn } from "actions";

export const SignUpScreenComponent = (props) => {
  return (
    <Form
      title="Rejestracja"
      fields={{
        email: { name: "Email" },
        firstName: { name: "Imię" },
        lastName: { name: "Nazwisko" },
        password: { name: "Hasło", type: "password" },
        repeatPassword: { name: "Powtórz Hasło", type: "password" },
      }}
      callback={props.logIn}
      button="Zarejestruj"
    />
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { logIn };

export const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreenComponent);
