import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Spacer, StackDivider, Text, VStack } from "@chakra-ui/react";
import { TaskProps } from "./TaskProps";

export interface AllTasksProps {
    tasks: TaskProps[];
    onRemove: (key: string) => void
};

export function AllTasks({ tasks, onRemove }: AllTasksProps) {
    const onRemoveHandler = (key: string) => {
        onRemove(key);
    };

    return (
        <VStack
            spacing='2em'
            w='100%'
            align='center'
        >
            <Heading
                textAlign='center'
                w='100%'
                p='.5em'
                borderRadius='lg'
                size='2xl'
                bg='green'
            >Tasks</Heading>

            <VStack
                w='100%'
                divider={<StackDivider />}
                borderColor='teal'
                spacing='4'
            >
                {tasks.map(task => {
                    return (
                        <Card
                            w='100%'
                            key={task.key}
                            flexDir='row'
                            p='1em'
                            alignItems='center'
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
                            {//TODO: add trash icons
                            }
                            <Button
                                onClick={() => onRemoveHandler(task.key)}
                                colorScheme='red'
                                variant='outline'
                            >
                                REMOVE
                            </Button>
                        </Card>
                    );
                })};
            </VStack>
        </VStack>
    );
};