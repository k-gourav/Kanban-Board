import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
        <section className={styles.header__container}>
           <h1>Platform Launch</h1>
           <div className={styles.task__adder}>
            <button>+ Add New Task</button>
            <button><img src="" alt="three-icon" /></button>
           </div>
          </section>
    </header>
  )
}

export default Header;