import React from 'react'
import styles from './TaskbarWrapper.module.css'
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import TaskBar from "../../components/TaskBar/TaskBar"

function TaskbarWrapper() {
  return (
    <div className={styles.main__task}>
    <SideBar />
    <Header />
    {/* <TaskBar />  */}
    </div>
  )
}

export default TaskbarWrapper