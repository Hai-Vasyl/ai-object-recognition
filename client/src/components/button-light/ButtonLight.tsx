import React from "react";

import { IButtonProps } from "../../interfaces";
import Button from "../button/Button";
import styles from "./button-light.module.scss";

const ButtonLight: React.FC<IButtonProps> = ({
  title,
  click,
  icon,
  className = "",
}) => {
  return (
    <Button
      title={title}
      click={click}
      className={`${styles["button-light"]} ${className}`}
      icon={icon}
    />
  );
};

export default ButtonLight;
