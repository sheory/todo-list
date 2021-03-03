import React from 'react';

import './completed-task.module.css'

import Styles from "../task/task.module.css";
import StylesHome from './completed-task.module.css'
import trashIcon from "../../assets/trash2.svg";

const CompletedTask = ({ task, completedTasks, setCompletedTasks}) => {

  const handleDeleteTask = (thisTask) => {
    setCompletedTasks((completedTasks.filter(task => (task !== thisTask))));
  }

  return (
     <div className={`${Styles.taskContainer} ${StylesHome.completedTaskContainer}`}>
       <div className={Styles.taskContainerInput}>
         {task}
       </div>
       <div className={Styles.buttons}>
         <button onClick={() => handleDeleteTask(task)}>
           <img src={trashIcon} alt=""/>
         </button>
       </div>
     </div>
  );
}

export default CompletedTask;