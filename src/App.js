import React, {useState, useEffect} from 'react';
import './App.css';

import homepageImg from './assets/homepage/ilustration.svg';

import AddTask from './components/add-task/add-task.component';
import ListTasks from './components/list-tasks/list-tasks.component';
import CompletedTasks from './components/list-completed-tasks/complited-tasks.component';

function App() {

  const [tasks, setTasks] = useState( [] );
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks'));
    if(tasks) {
      setTasks(tasks);
    }
    if(completedTasks) {
      setCompletedTasks(completedTasks);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks))
  }, [tasks, completedTasks]);

  return (
     <div className='page'>
         <div className='circle' />
         <div className='logo'>
           <h2>Tasks</h2>
       </div>

       <div className='AppContainer'>
         <AddTask tasks={tasks} setTasks={setTasks}/>
         {
           tasks.length > 0  ?
              <ListTasks
                 tasks={tasks}
                 setTasks={setTasks}
                 completedTasks={completedTasks}
                 setCompletedTasks={setCompletedTasks}
              />
           : null
         }
         {
           completedTasks.length > 0 ?
             <CompletedTasks  completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
           : null
         }
         {
           completedTasks.length === 0 && tasks.length === 0 ?
              <div className='initialPage'>
                <div className='imageContainer'>
                  <img className='homepageImg' src={homepageImg} alt=""/>
                </div>
                <div>
                  <p>Comece sua lista adicionando a primeira tarefa!</p>
                </div>
              </div>
           : null
         }
       </div>
     </div>
  );
}

export default App;