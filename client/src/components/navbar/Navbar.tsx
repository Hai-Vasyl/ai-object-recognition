import React from "react";
import { Link } from "react-router-dom";

import NavLink from "../link-nav/LinkNav";
import styles from "../navbar/navbar.module.scss";
import logo from "../../images/circle_logotype.png";

const Navbar: React.FC = () => {
  return (
    <div className={styles["nav"]}>
      <div className="wrapper">
        {/* <Link to="/">
          <img src={logo} alt="Circle logotype" />
        </Link> */}

        <NavLink
          to="canvas"
          icon={<span className="material-symbols-outlined">draw</span>}
        />
        <NavLink
          to="categories"
          icon={<span className="material-symbols-outlined">category</span>}
        />
        <NavLink
          to="about"
          icon={<span className="material-symbols-outlined">info</span>}
        />
        <NavLink
          to="users"
          icon={<span className="material-symbols-outlined">group</span>}
        />
        <NavLink
          to="administration"
          icon={
            <span className="material-symbols-outlined">
              admin_panel_settings
            </span>
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
