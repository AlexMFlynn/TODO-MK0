import { AllTasks } from "../Components/Tasks/AllTasks";
import { TaskProps } from "../Components/Tasks/TaskProps";

export interface TaskListProps {
    onRemoveTask: (key: string) => void;
    onAddTask: (taskData: TaskProps) => void;
    tasks: {
        title: string;
        description: string;
        key: string;
    }[];
};

export function TaskList({
    tasks,
    onRemoveTask,
    onAddTask
}: TaskListProps) {
    return (
        <AllTasks
            tasks={tasks}
            onRemove={onRemoveTask}
            onAddTask={onAddTask}
        />
    );
};