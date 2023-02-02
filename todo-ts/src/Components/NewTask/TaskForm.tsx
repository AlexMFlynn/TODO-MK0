import { ChangeEvent, useState } from "react";
import { TaskProps } from "../Tasks/TaskProps";
import { v4 as uuidv4 } from 'uuid';
import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Spacer, useToast, } from "@chakra-ui/react";

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
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsDescriptionError(userInput.description === '');
        setIsTitleError(userInput.title === '');
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
    const formStyle = {
        width: '100%',
        alignContent: 'center'
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={formStyle}
        >
            <FormControl
                isInvalid={isTitleError}
                display='flex'
                w='100%'
                m='2em'
                flexDir='column'
            >
                <FormLabel fontSize='xl' >Task Title</FormLabel>
                <Input
                    id="title"
                    type='text'
                    value={userInput.title}
                    placeholder='Get groceries'
                    onChange={changeHandler}
                    onBlur={onTitleBlur}
                    required
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
                flexDir='column'
            >
                <FormLabel fontSize='xl' >Task Description</FormLabel>
                <Input
                    type='text'
                    value={userInput.description}
                    placeholder='Buy milk, eggs, butter, ...'
                    onChange={changeHandler}
                    onBlur={onDescriptionBlur}
                    required
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
            <Box
                display='flex'
                alignItems='right'
            >
                <Spacer />
                <Button
                    w='20%'
                    size='lg'
                    type="submit"
                    colorScheme='cyan'
                >
                    Create Task
                </Button>
            </Box>
        </form>
    );
};