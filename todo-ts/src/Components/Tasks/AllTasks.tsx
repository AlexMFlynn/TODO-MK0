import { Box, Button, Card, CardBody, CardHeader, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import { TaskProps } from "./Task";

export interface AllTasksProps {
    tasks: TaskProps[];
    onRemove: (key: string) => void
};

export function AllTasks({ tasks, onRemove }: AllTasksProps) {
    const onRemoveHandler = (key: string) => {
        onRemove(key);
    };

    return (
        <Box
            maxWidth='md'
            padding='5px'
        >
            <Card
                variant='elevated'
                bg='lavender'
                display='flex'
                textAlign='center'

            >
                <CardHeader bg='darkcyan'>
                    <Heading size='md'>Tasks</Heading>
                </CardHeader>

                <CardBody textAlign='left'>
                    <VStack
                        display='flex'
                        divider={<StackDivider />}
                        borderColor='black'
                        spacing='4'
                        align='stretch'
                    >
                        {tasks.map(task => {
                            return (
                                <Box key={task.key}>
                                    <Heading
                                        size='xs'
                                        textTransform='uppercase'
                                    >
                                        {task.title}
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        {task.description}
                                    </Text>
                                    <Button
                                        onClick={() => onRemoveHandler(task.key)}
                                        colorScheme='red'
                                        variant='outline'
                                    >
                                        REMOVE
                                    </Button>
                                </Box>
                            );
                        })};
                    </VStack>
                </CardBody>
            </Card>
        </Box>
    );
};