import { TaskForm } from "../Components/NewTask/TaskForm";
import { TaskProps } from "../Components/Tasks/TaskProps";


export interface AddTaskProps {
    onAddTask: (taskData: TaskProps) => void;
};

export function AddTask({ onAddTask }: AddTaskProps) {
    return (
        <TaskForm onAddTask={onAddTask} />
    );
};