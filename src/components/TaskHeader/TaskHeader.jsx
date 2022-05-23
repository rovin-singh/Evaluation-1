import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({totalTask,unCompletedTask}) => {
  // sample values to be replaced


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">UnComplete Task : {unCompletedTask} of given Tasks </b>
      <b data-cy="header-total-task">Total Task: {totalTask}</b>
    </div>
  );
};

export default TaskHeader;
