import React from 'react';
import expandArrow from "../../assets/icons/expand-arrow.svg"
import threeDot from "../../assets/icons/three-dot.svg"
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
        <section className={styles.header__container}>
           <div className={styles.board__name}>
           <h1>Platform Launch</h1>
           <button className={styles.dropdown__btn}><img src={expandArrow} alt="expand-arrow-icon" /></button>
           </div>
           <section className={styles.task__adder}>
            <button className={styles.taskadd__btn}>+ Add New Task</button>
            <button className={styles.edit__btn}><img id={styles.edit__icon} src={threeDot} alt="edit-board-icon" /></button>
           </section>
          </section>
    </header>
  )
}

export default Header;