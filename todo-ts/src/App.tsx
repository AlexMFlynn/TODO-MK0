import { ChangeEvent, useState } from 'react';
import './App.css';
import { NewTask } from './Components/NewTask/NewTask';
import { TaskForm } from './Components/NewTask/TaskForm';
import { AllTasks } from './Components/Tasks/AllTasks';
import { TaskProps } from './Components/Tasks/Task';

const DUMMY_TASKS: {}[] = [{
  title: 'Sweep',
  descrition: 'Sweep all hard floors in the house'
}, {
  title: 'Mop',
  descrition: 'Mop all hard floors in the house, after sweeping is finished'
}, {
  title: 'Wash Laundry',
  descrition: 'Take laundry upstairs to be washed'
}];


export default function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS)
  const onAddTaskHandler = (taskData: TaskProps): any => {
    setTasks(prevTasks => {
      return [
        taskData, ...prevTasks
      ];
    });
  };
  //TODO: style Modal 
  // const [showModal, setShowModal] = useState(false);
  // const openModal = () => {
  //   setShowModal(true);
  // };
  return (
    <div>
      <h1>My Todo List</h1>
      <NewTask onAddTask={onAddTaskHandler} />
      <AllTasks tasks={tasks} />
    </div>
  );
};