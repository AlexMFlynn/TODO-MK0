import { ChangeEvent, useState } from "react";
import { TaskProps } from "../Tasks/TaskProps";
import { v4 as uuidv4 } from 'uuid';
import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, useToast, VStack } from "@chakra-ui/react";

export interface TaskFormProps {
    onAddTask: (taskData: TaskProps) => void;
};

export function TaskForm({ onAddTask }: TaskFormProps) {
    const toast = useToast();
    const [userInput, setUserInput] = useState({
        title: '',
        description: '',
        key: uuidv4()
    });
    const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        let targetId = event.target.id;
        console.log(event.target)
        setUserInput(prevState => {
            if (targetId === 'title') {
                return {
                    ...prevState,
                    title: event.target.value
                };
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
        onAddTask(userInput);
        toast({
            title: `"${userInput.title.toUpperCase()}" was succesfully added!`,
            position: 'top',
            status: "success",
            isClosable: true
        });
        setUserInput({
            title: '',
            description: '',
            key: uuidv4()
        });
    };

    const [isTitleError, setIsTitleError] = useState(false);
    const [isDescriptionError, setIsDescriptionError] = useState(false);
    const onTitleBlur = () => {
        setIsTitleError(userInput.title === '');
    };
    const onDescriptionBlur = () => {
        setIsDescriptionError(userInput.description === '');
    };

    return (
        <VStack
            align='center'
            w='100%'
        >
            <form>
                <FormControl
                    isInvalid={isTitleError}
                    display='flex'
                    w='100%'
                    m='2em'
                >
                    <FormLabel>Task Title</FormLabel>
                    <Input
                        id="title"
                        type='text'
                        value={userInput.title}
                        onChange={changeHandler}
                        onBlur={onTitleBlur}
                        isRequired
                    />
                    {!isTitleError ? (
                        <FormHelperText>
                            Enter a title for your task
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            A title is required to create a new task
                        </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                    isInvalid={isDescriptionError}
                    display='flex'
                    w='100%'
                    m='2em'
                >
                    <FormLabel>Task Description</FormLabel>
                    <Input
                        type='text'
                        value={userInput.description}
                        onChange={changeHandler}
                        onBlur={onDescriptionBlur}
                        isRequired
                    />
                    {!isDescriptionError ? (
                        <FormHelperText>
                            Add a description for your task
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>
                            A Description is required to create a new task
                        </FormErrorMessage>
                    )}
                </FormControl>
                <Button
                    type="submit"
                    colorScheme='cyan'
                >
                    Create Task
                </Button>
            </form>
        </VStack>
    );
};
        // <form onSubmit={submitHandler}>
        //     <div>
        //         <div>
        //             <Input
        //                 type="text"
        //                 name='title'
        //                 label={'Title'}
        //                 value={userInput.title}
        //                 onValueChange={changeHandler}
        //             />
        //         </div>
        //         <div>
        //             <Input
        //                 type="text"
        //                 name='description'
        //                 label={'Description'}
        //                 value={userInput.description}
        //                 onValueChange={changeHandler}
        //             />
        //         </div>
        //     </div>
        //     <Button
        //         kind="raised"
        //         type='submit'
        //         onClick={() => { }}
        //     >
        //         Submit
        //     </Button>
        // </form>