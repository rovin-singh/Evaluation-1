import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
  const Task = ({dataArr,completedData,comFun}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div>
    {dataArr.map((data)=>(
        <li data-cy="task" className={styles.task}>
        <input type="checkbox" data-cy="task-checkbox" onClick={comFun}/>
        <div data-cy="task-text">
           <p>{data}</p>
        </div>
         <Counter />
        <button data-cy="task-remove-button">Remove</button>
      </li>
    ))}
    </div>
  );
};

export default Task;
