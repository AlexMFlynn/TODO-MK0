import { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { TaskProps } from './Components/Tasks/Task';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { TaskList } from './pages/TaskList';
import { AddTask } from './pages/AddTask';
import { NavBar } from './Components/UI/NavBar/NavBar';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasksList');
    if (savedTasks) {
      return (
        JSON.parse(savedTasks)
      );
    } else {
      return ('');
    };
  });

  const handleOnAddTask = (taskData: TaskProps): any => {
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
    <ChakraProvider >

      <NavBar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/taskList' element={
            <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
          } />
          <Route path='/addtask' element={
            <AddTask onAddTask={handleOnAddTask} />
          } />
        </Routes>

      </main>
    </ChakraProvider >
  );
};