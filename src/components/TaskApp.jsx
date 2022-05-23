import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask]=React.useState("");
  const [dataArr,setData]=React.useState([])
  const [totalTask,settotalTask]=React.useState(0)
  const [unCompletedTask,setunCompletedTask]=React.useState(0)
  const [completedData,setCompleteData]=React.useState(0)
  
  const addTask=()=>{
    setData([...dataArr,task]);
    setTask("");
    settotalTask(dataArr.length+1);
  }
  const comFun=(e)=>{
    console.log(e)
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader totalTask={totalTask} unCompletedTask={unCompletedTask} />
      <AddTask  task={task} setTask={setTask} addTask={addTask} />
      <Tasks  dataArr={dataArr} comFun={comFun} completedData={completedData} />
    </div>
  );
};

export default TaskApp;
