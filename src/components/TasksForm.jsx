import PropTypes from 'prop-types';
import { useState } from "react"

export default function TasksForm({handleAdd}) {

  const [newTaskInput, setNewTaskInput] = useState("")

  const addNewTask = (e) => {
    e.preventDefault()

    const id = new Date().getTime()
    const name = newTaskInput
    const taskToAdd = {id, name}
    handleAdd(taskToAdd)
    setNewTaskInput("")
   }

  return (
        <form className="add-task-form" onSubmit={addNewTask}>
          <div className="input-wrapper">
            <label htmlFor="task-input">New task : </label>
            <input
              value={newTaskInput}
              onChange={e => setNewTaskInput(e.target.value)} 
              type="text" 
              id="task-input"
              placeholder="Add a new task here..."
            />
          </div>
          <button className="submit-button"><span>+</span></button>
        </form>
  );
}

TasksForm.propTypes = {
    handleAdd: PropTypes.func.isRequired
};