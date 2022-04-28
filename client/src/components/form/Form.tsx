import React, {
  Dispatch,
  FormEvent,
  MouseEvent,
  ReactNode,
  SetStateAction,
} from "react";

import { IFormFields } from "../../interfaces";
import styles from "./form.module.scss";

interface IFormProps {
  title: string;
  fieldsState: [IFormFields, Dispatch<SetStateAction<IFormFields>>];
  submit: (
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  children: ReactNode;
  className?: string;
}

const Form: React.FC<IFormProps> = ({
  title,
  fieldsState,
  submit,
  children,
  className = "",
}) => {
  const fields = Object.entries(fieldsState[0]).map((field) => {
    const [name, params] = field;
    const { Element } = params;

    return (
      <Element
        key={name}
        field={{ ...params, name }}
        setField={fieldsState[1]}
      />
    );
  });

  return (
    <form className={`${styles["form"]} ${className}`} onSubmit={submit}>
      <h3 className={styles["form__title"]}>{title}</h3>
      <div className={styles["form__fields"]}>{fields}</div>
      <div className={styles["form__buttons"]}>{children}</div>
    </form>
  );
};

export default Form;
