import { TaskProps } from "../Tasks/Task";
import { TaskForm } from "./TaskForm"


export interface NewTaskProps {
    onAddTask: (taskData: TaskProps) => {}
};

export function NewTask({
    onAddTask
}: NewTaskProps) {
    const onNewTaskHandler = (newTaskData: TaskProps) => {
        onAddTask(newTaskData);
    }

    return (
        <div>
            <TaskForm onNewTask={onNewTaskHandler}></TaskForm>
        </div>
    )

};