import React from 'react';
import styles from './SideBar.module.css';
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
        <section className={styles.sidebar__container}>
            <nav>
            <h1><Link to="/"><img src="" alt="" /></Link></h1>
            <div className={styles.nav-items}>
                <h2>ALL BOARDS (9)</h2>
                <ul>
                    <li><Link to="/board/1">Product Idea</Link></li>
                    <li><Link to="/board/2">Roadmap</Link></li>
                    <li><Link to="/board/3">Marketing Plan</Link></li>
                </ul>
            </div>
            </nav>

        </section>

    </aside>
  )
}

export default SideBar