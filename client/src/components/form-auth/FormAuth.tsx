import React, { FormEvent, MouseEvent, useState } from "react";

import { IFormFields } from "../../interfaces";
import FieldInputData from "../field-input/field-input.data";
import Form from "../form/Form";
import ButtonLight from "../button-light/ButtonLight";
import Button from "../button/Button";
import styles from "./form-auth.module.scss";

const FormAuth: React.FC = () => {
  const [formLogin, setFormLogin] = useState(true);
  const formFieldsState = useState<IFormFields>({
    firstName: new FieldInputData("First name"),
    lastName: new FieldInputData("Last name"),
    email: new FieldInputData("Email", "email"),
    password: new FieldInputData("Passsword", "password"),
  });
  const [formFields, setFormFields] = formFieldsState;

  const hadleChangeForm = () => {
    setFormLogin((prev) => !prev);
    setFormFields((prev) =>
      Object.fromEntries(
        Object.entries(prev).map((field) => {
          if (field[0] === "firstName" || field[0] === "lastName") {
            return [field[0], { ...field[1], hidden: !field[1].hidden }];
          }

          return field;
        })
      )
    );
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("SUBMITTED");
  };

  return (
    <Form
      className={styles["form-auth"]}
      submit={handleSubmit}
      title={`${formLogin ? "Login" : "Register"} User`}
      fieldsState={formFieldsState}
    >
      <Button title={formLogin ? "LOGIN" : "SIGN UP"} click={handleSubmit} />
      <ButtonLight
        title={formLogin ? "SIGN UP" : "LOGIN"}
        click={hadleChangeForm}
      />
    </Form>
  );
};

export default FormAuth;
