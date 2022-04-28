import React, { ChangeEvent } from "react";
import { IFormField } from "../../interfaces";

import styles from "./field-input.module.scss";

interface IFieldInputParams extends IFormField {
  name: string;
}

interface IFieldInputProps {
  field: IFieldInputParams;
  setField: (state: any) => void;
  className?: string;
}

const FieldInput: React.FC<IFieldInputProps> = ({
  field,
  setField,
  className = "",
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setField((prev: any) => {
      return { ...prev, [name]: { ...prev[name], value, msg: "" } };
    });
  };

  const isErrorMsg = field.msg?.length;

  return (
    <div
      className={`${styles["field-input"]} ${
        field.hidden && styles["field-input--hidden"]
      } ${className}`}
    >
      <label className={styles["field-input__label"]} htmlFor={field.name}>
        <span className={styles["field-input__title"]}>{field.title}</span>
        <span
          className={`${styles["field-input__info"]} ${
            isErrorMsg && styles["field-input__info--active"]
          }`}
        >
          <span
            className={`material-symbols-outlined ${styles["field-input__icon"]}`}
          >
            info
          </span>
          <span className={styles["field-input__msg"]}>
            {field.msg}
            <span className={styles["field-input__triangle"]}></span>
          </span>
        </span>
      </label>
      <input
        className={`${styles["field-input__input"]} ${
          isErrorMsg && styles["field-input__input--error"]
        }`}
        value={field.value}
        name={field.name}
        type={field.type}
        onChange={handleChange}
      />
    </div>
  );
};

export default FieldInput;
