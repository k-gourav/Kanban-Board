import React from 'react';
import logoIcon from "../../assets/images/orbito-logo.png"
import styles from './SideBar.module.css';
import { Link } from "react-router-dom";

const SideBar = () => {
  const handleBoard = () => {
    
  }

  return (
    <aside>
        <section className={styles.sidebar__container}>
            <nav className={styles.nav__bar}>
            <h1><Link to="/"><img id={styles.logo} src={logoIcon} alt="oribito-logo-icon" width="130" /></Link></h1>
            <div className={styles.nav__items}>
                <h2>ALL BOARDS (9)</h2>
                <ul id={styles.nav__links}>
                    <li><Link to="/board/1">Product Idea</Link></li>
                    <li><Link to="/board/2">Roadmap</Link></li>
                    <li><Link to="/board/3">Marketing Plan</Link></li>
                    <li><Link to="/board/3">Execution Plan</Link></li>
                    <button className={styles.newboard__btn} onClick={handleBoard}>+ Create New Board</button>
                </ul>
            </div>
            </nav>
            <div className={styles.toggle__section}>
              <p>Icon 1</p>
              <p>Icon 2</p>
              <p>Icon 3</p>
            </div>
          </section>
          </aside>
  )
}

export default SideBar