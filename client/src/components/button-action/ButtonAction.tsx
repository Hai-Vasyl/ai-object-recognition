import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./button-action.module.scss";

interface IButtonAction {
  icon: ReactNode;
  click: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ButtonAction: React.FC<IButtonAction> = ({
  icon,
  click,
  className = "",
}) => {
  return (
    <button className={`${styles["btn-action"]} ${className}`} onClick={click}>
      {icon}
    </button>
  );
};

export default ButtonAction;
