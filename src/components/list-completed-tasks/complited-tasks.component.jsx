import React from 'react';

import './completed-tasks.module.css'

import Styles from '../list-tasks/list-tasks.module.css';
import CompletedTask from  '../completed-task/completed-task.component';

const CompletedTasks = ({completedTasks, setCompletedTasks}) =>  (
    <div className={Styles.container}>
      <span className={Styles.title}>Concluídos • {completedTasks.length}</span>
        {
          completedTasks.map((task, index) =>
             <div>
               <CompletedTask
                  key={index}
                  task={task}
                  completedTasks={completedTasks}
                  setCompletedTasks={setCompletedTasks}
               />
             </div>
          )
        }
    </div>
);

export default CompletedTasks;