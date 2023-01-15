import { Box, Card, CardBody, CardHeader, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import { TaskProps } from "./Task";

export interface AllTasksProps {
    tasks: TaskProps[];
};

export function AllTasks({ tasks }: AllTasksProps) {

    return (
        <Card variant='elevated' bg='lavender' >
            <CardHeader bg='azure'>
                <Heading size='md'>Tasks</Heading>
            </CardHeader>

            <CardBody>
                <VStack divider={<StackDivider />} borderColor='black' spacing='4' align='stretch'>
                    {tasks.map(task => {
                        console.log(task)
                        return (
                            <Box key={task.key}>
                                <Heading size='xs' textTransform='uppercase'>
                                    {task.title}
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    {task.description}
                                </Text>
                            </Box>
                        );
                    })};
                </VStack>
            </CardBody>
        </Card>
    )
}