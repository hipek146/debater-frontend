import React from "react";
import { Form } from "components/Form";

export const SignInScreen = () => {
  return (
    <Form
      title="Zaloguj się"
      fields={{
        email: { name: "Email" },
        password: { name: "Hasło", type: "password" },
      }}
      button="Zaloguj"
    />
  );
};
