import { Box } from "@chakra-ui/react";
import { NewTask } from "../Components/NewTask/NewTask";
import { TaskProps } from "../Components/Tasks/Task";


export interface AddTaskProps {
    onAddTask: (taskData: TaskProps) => {}
}

export function AddTask({
    onAddTask
}: AddTaskProps) {


    return (
        <Box>
            <NewTask onAddTask={onAddTask} />
        </Box>
    )
}