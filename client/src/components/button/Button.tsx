import React from "react";

import { IButtonProps } from "../../interfaces";
import styles from "./button.module.scss";

const Button: React.FC<IButtonProps> = ({
  title,
  click,
  className = "",
  icon,
}) => {
  return (
    <button className={`${styles["button"]} ${className}`} onClick={click}>
      {icon && (
        <span className={`material-symbols-outlined ${styles["button__icon"]}`}>
          info
        </span>
      )}
      <span className={styles["button__title"]}>{title}</span>
    </button>
  );
};

export default Button;
