import React, {useState} from "react";
import Styles from './update-task.module.css';

import updateIcon from '../../assets/check-mark.svg'
import closeButton from '../../assets/close.svg'

const compare = require('../../utils').compare;

const UpdateTask = ({toggle, setToggle, tasks, setTasks, index}) => {

  const [inputUpdate, setInputUpdate] = useState('');
  const [updatedTask, setUpdatedTask] = useState(tasks);

  const handleCloseButton = () => setToggle(!toggle)

  const updateTaskValue = (inputUpdate, index) => () => {
      if (!inputUpdate) {
      alert("Escreva uma tarefa válida");
    } else if(compare(inputUpdate,tasks)) {
        alert("Essa tarefa já foi adicionada!")
      } else {
      let arrCopy = [...updatedTask];
      arrCopy[index] = inputUpdate;
      setTasks(arrCopy);
      handleCloseButton();
    }
  }

  return (
     <div className={Styles.allPage}>
       <div className={Styles.modalContainer}>
         <div>
           <button className={Styles.buttonClose} onClick={handleCloseButton}>
             <img src={closeButton} alt=""/>
           </button>
         </div>
         <div className={Styles.updateContainer}>
           <input
              value={inputUpdate}
              type="text"
              placeholder='Atualize essa tarefa'
              onChange={e => setInputUpdate( e.target.value)}
           />
           <button
              onClick={(updateTaskValue(inputUpdate, index))} >
             <img src={updateIcon} alt=""/>
           </button>
         </div>
       </div>
     </div>
  )
}
export default UpdateTask;

