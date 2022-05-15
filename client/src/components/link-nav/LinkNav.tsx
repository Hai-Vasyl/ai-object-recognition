import React, { ReactNode } from "react";
import { NavLink as Link } from "react-router-dom";

import styles from "./link-nav.module.scss";

interface ILinkNavProps {
  to: string;
  icon: ReactNode;
}

const LinkNav: React.FC<ILinkNavProps> = ({ to, icon }) => {
  return (
    <Link
      className={({ isActive }) =>
        `${styles["link-nav"]} ${isActive ? styles["link-nav--active"] : ""}`
      }
      to={to}
    >
      {icon}
    </Link>
  );
};

export default LinkNav;
