import React from 'react';

import Styles from './list-tasks.module.css';

import Task from "../task/task.component";

const ListTasks = ({tasks, setTasks, completedTasks, setCompletedTasks, completedTaskId, setCompletedTaskId}) => (
  <div className={Styles.container}>
    <span className={Styles.title}>Tarefas • {tasks.length}</span>
     {
        tasks.map((task, index) =>
           <Task key={index} task={task} tasks={tasks} setTasks={setTasks} index={index} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} completedTaskId={completedTaskId} setCompletedTaskId={setCompletedTaskId}/>
        )
      }
  </div>
)


export default ListTasks;