import React, { useState } from 'react';

import Styles from './add-task.module.css';
import addIcon from '../../assets/add.svg'

const compare = require('../../utils').compare;

const AddTask = ({tasks, setTasks}) => {
  const [input, setInput] = useState('');
  const addTask = () => {
    if(!input) {
      alert("Adicione uma tarefa válida");
    } else if(compare(input, tasks)) {
      alert("Tarefa já adicionada!");
    } else {
      setTasks(oldTasks => [...oldTasks, input]);
      setInput('');
      return 0;
    }
  }
  return (
     <div className={Styles.addTask}>
       <input
          value={input}
          type="text"
          placeholder='adicione uma tarefa'
          onChange={e => setInput(e.target.value)}
       />
       <button onClick={addTask} className={Styles.addButton}>
         <img src={addIcon} alt="add"/>
       </button>
     </div>
  );
}
export default AddTask;