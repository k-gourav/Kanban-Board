import React from "react";
import { MdOutlineSpaceDashboard, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import logoIcon from "../../assets/images/orbito-logo.png";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const handleBoard = () => {};

  return (
    <aside>
      <section className={styles.sidebar__container}>
        <nav className={styles.nav__bar}>
          <div className={styles.nav__logo}>
            <Link to="/">
              <img
                id={styles.logo}
                src={logoIcon}
                alt="oribito-logo-icon"
                width="130"
              />
            </Link>
            <MdKeyboardDoubleArrowLeft className={styles.collapse__sidebar} />
            </div>
          <div className={styles.nav__items}>
            <h2>All Boards (5)</h2>
            <ul id={styles.nav__links}>
              <li>
                <Link className={styles.nav__board} to="/board/1">
                  <MdOutlineSpaceDashboard /> Product Development
                </Link>
              </li>
              <li>
                <Link className={styles.nav__board} to="/board/2">
                  <MdOutlineSpaceDashboard /> Deployment
                </Link>
              </li>
              <li>
                <Link className={styles.nav__board} to="/board/3">
                  <MdOutlineSpaceDashboard /> Strategic data
                </Link>
              </li>
              <li>
                <Link className={styles.nav__board} to="/board/3">
                  <MdOutlineSpaceDashboard /> Sales report
                </Link>
              </li>
              <button className={styles.newboard__btn} onClick={handleBoard}>
                + Create New Board
              </button>
            </ul>
          </div>
        </nav>
        <div className={styles.toggle__section}>
          <p>Icon 1</p>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
