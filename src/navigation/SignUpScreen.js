import React from "react";
import { Form } from "components/Form";

export const SignUpScreen = () => {
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
      button="Zarejestruj"
    />
  );
};
