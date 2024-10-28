import React from 'react';
import styles from './TaskBar.module.css';

const TaskBar = () => {
  return (
    <aside>
        <section className={styles.taskbar__container}>
            <div className={styles.taskbar_column}>
              <h1>Todo</h1>
              <div className={styles.taskbar__content}>
                <h2 className={styles.content__title}>Title 1</h2>
                <p className={styles.content__subtitle}>0 out of 0 subtasks</p>
              </div>
              <div className={styles.taskbar__content}>
                <h2 className={styles.content__title}>Title 2</h2>
                <p className={styles.content__subtitle}>0 out of 0 subtasks</p>
              </div>
            </div>

            <div className={styles.taskbar_column}>
              <h1>Doing</h1>
              <div className={styles.taskbar__content}>
                <h2 className={styles.content__title}>Title 3</h2>
                <p className={styles.content__subtitle}>0 out of 0 subtasks</p>
              </div>
              <div className={styles.taskbar__content}>
                <h2 className={styles.content__title}>Title 4</h2>
                <p className={styles.content__subtitle}>0 out of 0 subtasks</p>
              </div>
            </div>
          </section>

    </aside>
  )
}

export default TaskBar;