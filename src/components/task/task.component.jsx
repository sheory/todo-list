import React, {useState} from 'react';
import UpdateTask from '../update-task/update-task.component';

import Styles from './task.module.css';

import trashIcon from '../../assets/trash.svg';
import editIcon from '../../assets/edit.svg';

const compare = require('../../utils').compare;

const Task = ({task, setTasks, tasks, index, completedTasks, setCompletedTasks}) => {
  const [toggle, setToggle] = useState(false);

  const handleDeleteTask = (thisTask) => {
    setTasks((tasks.filter(task => (task !== thisTask))));
  }

  const handleCompletedTasks = () => {
    if (compare(task, completedTasks)) {
      alert("Ops... Uma tarefa identica a essa já está na lista de tarefas finalizadas: Exclua-a antes de finalizar esta!")
    } else {
      setCompletedTasks(oldTasks => [...oldTasks, task]);
      handleDeleteTask(task);
    }
  }

  const update = () => setToggle(!toggle)

  return (
     <div className={Styles.taskContainer}>
       <div className={Styles.taskContainerInput}>
         <button className={Styles.checkButton} onClick={handleCompletedTasks} type="checkbox"> </button>
         <span>{task}</span>
       </div>
       <div className={Styles.buttons}>
         <button onClick={() => handleDeleteTask(task)}>
           <img src={trashIcon} alt=""/>
         </button>
           <button onClick={update}>
             <img src={editIcon} alt=""/>
           </button>
         {
           toggle ? <UpdateTask toggle={toggle} setToggle={setToggle} tasks={tasks} setTasks={setTasks} index={index}/>  : null
         }
       </div>
     </div>
  )
}

export default Task;