import { useEffect, useState } from 'react';
import './App.css';
import { NewTask } from './Components/NewTask/NewTask';
import { Box, ChakraProvider } from '@chakra-ui/react'
import { AllTasks } from './Components/Tasks/AllTasks';
import { TaskProps } from './Components/Tasks/Task';

export default function App() {
  const [view, setView] = useState('list');

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasksList');
    if (savedTasks) {
      return (
        JSON.parse(savedTasks)
      )
    } else {
      return ''
    };
  });

  const onAddTaskHandler = (taskData: TaskProps): any => {
    setTasks((prevTasks: { tasks: TaskProps }[]) => {
      return [
        taskData, ...prevTasks
      ];
    });
  };

  const handleRemoveTask = (key: string) => {
    setTasks((prevTasks: {
      title: string;
      description: string;
      key: string;
    }[]) => {
      const updatedTasks = prevTasks.filter(task => {
        return (task.key !== key)
      });
      return updatedTasks
    });
  };

  useEffect(() => {
    localStorage.setItem('tasksList', JSON.stringify(tasks))
  });


  return (
    <ChakraProvider>
      <Box className='App'>
        <nav className='top-nav'>
          <h3
            onClick={() => setView('list')}
            style={{ color: view === 'list' ? '#4E6C50' : '#F2DEBA' }}
          >
            Task List
          </h3>
          <h3
            onClick={() => setView('createTask')}
            style={{ color: view === 'createTask' ? '#4E6C50' : '#F2DEBA' }}
          >
            Add New Task
          </h3>
        </nav>
        {view === 'list' ? <AllTasks onRemove={handleRemoveTask} tasks={tasks} /> : <NewTask onAddTask={onAddTaskHandler} />}
      </Box>
    </ChakraProvider>
  );
};