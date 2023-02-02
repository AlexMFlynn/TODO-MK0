import { useEffect, useState } from 'react';
import './App.css';
import { TaskProps } from './Components/Tasks/TaskProps';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { TaskList } from './pages/TaskList';
import { NavBar } from './Components/UI/NavBar/NavBar';
import { Flex, Heading, Spacer, VStack } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
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

  const handleOnAddTask = (taskData: TaskProps): void => {
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
      <Flex
        alignItems='center'
        w='100%'
        p='.5em'
      >
        <Heading
          ml='8'
          size='md'
          fontWeight='semibold'
        >
          <NavBar />
        </Heading>
        <Spacer />
        <IconButton
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          aria-label='Light and Dark mode toggle'
          isRound={true}
          onClick={toggleColorMode}
        />
      </Flex>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/tasklist' element={
          <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} onAddTask={handleOnAddTask} />
        } />
      </Routes>
    </VStack >
  );
};