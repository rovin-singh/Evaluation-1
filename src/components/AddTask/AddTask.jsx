import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({task,setTask,addTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" required type="text" placeholder="Enter Something " value={task} onChange={(e)=>setTask(e.target.value)}/>
      <button data-cy="add-task-button" onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTask;
