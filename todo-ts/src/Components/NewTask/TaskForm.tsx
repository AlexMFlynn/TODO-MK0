import { ChangeEvent, useState } from "react";
import { TaskProps } from "../Tasks/Task";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

export interface TaskFormProps {
    //TODO: change type
    onNewTask: (taskData: TaskProps) => {};
}

export function TaskForm({ onNewTask }: TaskFormProps) {
    const [userInput, setUserInput] = useState({
        title: '',
        description: ''
    });

    //use : after function params to type its return value
    const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        let targetId = event.target.id;
        setUserInput(prevState => {
            if (targetId === 'title') {
                return {
                    ...prevState,
                    title: event.target.value
                }
            } else {
                return {
                    ...prevState,
                    description: event.target.value
                };
            };
        });
    };
    const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('submitted')
        onNewTask(userInput)
        setUserInput({
            title: '',
            description: ''
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <Input
                        type="text"
                        name='title'
                        label={'Title'}
                        value={userInput.title}
                        onValueChange={changeHandler}
                    ></Input>
                </div>
                <div>
                    <Input
                        type="text"
                        name='description'
                        label={'Description'}
                        value={userInput.description}
                        onValueChange={changeHandler}
                    ></Input>
                </div>
            </div>
            <Button kind="raised" type='submit' onClick={() => { }}>Submit</Button>
        </form>
    );
};