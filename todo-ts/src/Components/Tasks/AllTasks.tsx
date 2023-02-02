import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement, Spacer, StackDivider, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { TaskForm } from "../NewTask/TaskForm";
import { TaskProps } from "./TaskProps";

export interface AllTasksProps {
    tasks: TaskProps[];
    onRemove: (key: string) => void;
    onAddTask: (taskData: TaskProps) => void;
};

export function AllTasks({ tasks, onRemove, onAddTask }: AllTasksProps) {
    const onRemoveHandler = (key: string) => {
        onRemove(key);
    };

    //TODO: Implement edit task feature
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onEdit = () => {

    };

    const [filter, setFilter] = useState('')
    const onFilter = (event: ChangeEvent<HTMLInputElement>): void => {
        setFilter(event.target.value);
    };
    const filterCheck = (task: TaskProps) => {
        if (task.title.includes(filter) || task.description.includes(filter)) {
            return task
        };
    };
    return (
        <VStack
            spacing='2em'
            w='80%'
            align='center'
        >
            <TaskForm onAddTask={onAddTask} />
            <Heading
                textAlign='center'
                w='100%'
                p='.5em'
                borderRadius='lg'
                size='2xl'
                bg='green'
            >Tasks</Heading>
            <Box display='flex' w='66%'>
                <InputGroup w='100%' color='green' >
                    <InputLeftElement children={<SearchIcon />} />
                    <Input
                        onChange={onFilter}
                        value={filter}
                        placeholder="Search for a task"
                    />
                </InputGroup>
            </Box>
            <VStack
                w='90%'
                divider={<StackDivider />}
                borderColor='teal'
                spacing='4'
            >
                {tasks.filter(filterCheck).map(task => {
                    return (
                        <Card
                            w='100%'
                            key={task.key}
                            flexDir='row'
                            p='1em'
                            alignItems='center'
                            variant='filled'
                        >
                            <Box mr='.5em'>
                                <CardHeader
                                    color='green'
                                    fontWeight='bold'
                                    p='0'
                                    textTransform='uppercase'
                                >
                                    {task.title}
                                </CardHeader>
                                <CardBody
                                    p='0'
                                >
                                    <Text>
                                        {task.description}
                                    </Text>
                                </CardBody>
                            </Box>
                            <Spacer />
                            {/* <IconButton
                                    aria-label="edit task"
                                    icon={<EditIcon />}
                                    onClick={onOpen}
                                    colorScheme='purple'
                                    variant='outline'
                                    mb='.2em'
                                /> */}
                            <IconButton
                                aria-label="delete task"
                                icon={<DeleteIcon />}
                                onClick={() => onRemoveHandler(task.key)}
                                colorScheme='red'
                                variant='outline' />
                        </Card>
                    );
                })};
            </VStack>
        </VStack>
    );
};