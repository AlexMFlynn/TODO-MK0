import { Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export function Home() {
    return (
        <Box>
            <Heading as='h1' size='2xl' >Welcome To Your TO-DO List</Heading>
            <Heading>
                This is an easy to use to-do list that can help you keep track of your tasks.
            </Heading>
            <Heading>
                To get started just press continue
            </Heading>
            <Button as={Link} to='AddTask' colorScheme='cyan'>Continue</Button>
        </Box >
    );
};