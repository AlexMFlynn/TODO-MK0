import { useState } from 'react';
import './App.css';
import { NewTask } from './Components/NewTask/NewTask';
import { ChakraProvider } from '@chakra-ui/react'
import { AllTasks } from './Components/Tasks/AllTasks';
import { TaskProps } from './Components/Tasks/Task';
import { v4 as uuidv4 } from 'uuid';

import { Test } from './Components/UI/Test';

const DUMMY_TASKS: {
  title: string,
  description: string,
  key: string;
}[] = [{
  title: 'Sweep',
  description: 'Sweep all hard floors in the house',
  key: uuidv4()
}, {
  title: 'Mop',
  description: 'Mop all hard floors in the house, after sweeping is finished',
  key: uuidv4()
}, {
  title: 'Wash Laundry',
  description: 'Take laundry upstairs to be washed',
  key: uuidv4()
}];


export default function App() {
  // const [view, setView] = useState('list');
  const [tasks, setTasks] = useState(DUMMY_TASKS)
  const onAddTaskHandler = (taskData: TaskProps): any => {
    setTasks(prevTasks => {
      return [
        taskData, ...prevTasks
      ];
    });
  };

  return (
    <ChakraProvider>
      <NewTask onAddTask={onAddTaskHandler} />
      <AllTasks tasks={tasks} />
    </ChakraProvider>

  );
};