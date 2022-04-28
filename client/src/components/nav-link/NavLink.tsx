import React, { ReactNode } from "react";
import { NavLink as Link } from "react-router-dom";

import styles from "./nav-link.module.scss";

interface INavLinkProps {
  to: string;
  icon: ReactNode;
}

const NavLink: React.FC<INavLinkProps> = ({ to, icon }) => {
  return (
    <Link
      className={({ isActive }) =>
        `${styles["navlink"]} ${isActive ? styles["navlink--active"] : ""}`
      }
      to={to}
    >
      {icon}
    </Link>
  );
};

export default NavLink;
