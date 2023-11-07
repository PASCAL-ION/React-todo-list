import "./style.css";
import { useState } from "react";
import Task from "./components/Task";
import TasksForm from "./components/TasksForm";

export default function App(){

  const [tasksList, setTasksList] = useState([]);
  
  const deleteTask = (taskId) => {
    const tasksListCopy = [...tasksList]
    const taskListCopyUpdated = tasksListCopy.filter(task => task.id !== taskId)
    setTasksList(taskListCopyUpdated)
  }

  const handleAdd = (taskToAdd) => {
    const tasksListCopy = [...tasksList]
    tasksListCopy.push(taskToAdd)
    setTasksList(tasksListCopy)
  }

  return (
    <>
      <div className="main-container">
        <h1 className="app-name-h1">To Do</h1>
        <TasksForm handleAdd={handleAdd}/>
        <div className="tasks-wrapper">
          <h1 className="tasks-list-h1">Tasks</h1>
          <ul className="tasks-list">
            {tasksList.map((task) => {
              return(
                <Task task={task} onClick={() => deleteTask(task.id)} key={task.id}/>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}