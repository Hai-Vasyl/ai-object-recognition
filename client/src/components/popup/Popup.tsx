import React, { ReactNode } from "react";
import useStore from "../../hooks/useStore";

import ButtonAction from "../button-action/ButtonAction";
import styles from "./popup.module.scss";
import { togglePopup } from "./redux/popup-slice";

interface IPopupProps {
  children: ReactNode;
}

const Popup: React.FC<IPopupProps> = ({ children }) => {
  const { state, dispatch } = useStore();

  return (
    <div
      className={`${styles["popup"]} ${
        state.popup.active && styles["popup--active"]
      }`}
    >
      <ButtonAction
        className={styles["popup__btn-action"]}
        icon={<span className="material-symbols-outlined">close</span>}
        click={() => dispatch(togglePopup())}
      />
      {children}
    </div>
  );
};

export default Popup;
