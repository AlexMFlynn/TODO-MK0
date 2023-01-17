import { useEffect, useState } from 'react';
import './App.css';
import { TaskProps } from './Components/Tasks/Task';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { TaskList } from './pages/TaskList';
import { AddTask } from './pages/AddTask';
import { NavBar } from './Components/UI/NavBar/NavBar';
import { Flex, Heading, VStack } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { SunIcon, MoonIcon, WarningIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/color-mode';


export default function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

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

    <VStack p={5}>
      <Flex w='100%'>
        <Heading
          ml='8' size='md' fontWeight='semibold' color='cyan.400'
        >
          <NavBar />
        </Heading>
      </Flex>
      <IconButton
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        aria-label='Light Mode'
        isRound={true}
        onClick={toggleColorMode}
      />
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
    </VStack >
  );
};