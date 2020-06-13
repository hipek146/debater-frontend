import React, { useState } from "react";
import { Form } from "components/Form";
import { connect } from "react-redux";
import { logIn } from "actions";

export const SignInScreenComponent = (props) => {
  const [login, setLogin] = useState(() => props.logIn);

  return (
    <>
      <Form
        title="Zaloguj się"
        fields={{
          email: { name: "Email" },
          password: { name: "Hasło", type: "password" },
        }}
        callback={login}
        button="Zaloguj"
      />
      <label>
        <input
          type="checkbox"
          onChange={(event) => {
            if (event.target.checked)
              setLogin(() =>
                props.logIn.bind(this, {
                  email: "organizer",
                  password: "password",
                })
              );
            else setLogin(() => props.logIn.bind(this));
          }}
        />
        Zaloguj jako organizator
      </label>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = { logIn };

export const SignInScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreenComponent);
