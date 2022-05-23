import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask]=React.useState("");
  const [dataArr,setData]=React.useState([])
  const addTask=()=>{
    setData([...dataArr,task])
    setTask("");
    console.log(dataArr)
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask  task={task} setTask={setTask} addTask={addTask}/>
      <Tasks />
    </div>
  );
};

export default TaskApp;
