import { Box } from "@chakra-ui/react";
import { TaskForm } from "../Components/NewTask/TaskForm";
import { TaskProps } from "../Components/Tasks/Task";


export interface AddTaskProps {
    onAddTask: (taskData: TaskProps) => {}
};

export function AddTask({ onAddTask }: AddTaskProps) {
    return (
        <Box>
            <TaskForm onAddTask={onAddTask} />
        </Box>
    );
};