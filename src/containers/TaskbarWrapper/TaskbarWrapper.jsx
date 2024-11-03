import React from 'react'
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import TaskBar from "../../components/TaskBar/TaskBar"

function TaskbarWrapper() {
  return (
    <>
    <SideBar />
    <Header />
    <TaskBar />
    </>
  )
}

export default TaskbarWrapper