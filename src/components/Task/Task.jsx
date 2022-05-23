import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div>
      <h1>Hello</h1>
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text"></div>
       <Counter />
      <button data-cy="task-remove-button"></button>
    </li>
    </div>
  );
};

export default Task;
