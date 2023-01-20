import { Box, Heading, Button, VStack, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <VStack >
            <Flex direction='column'>
                <Heading
                    as='h1'
                    size='2xl'
                    m='1em'
                >
                    Welcome To Your "TO-DO LIST"!
                </Heading>
                <Heading
                    size='xl'
                    m='1em'

                >
                    An easy to use task keeper to keep you on track.
                </Heading>
                <Heading
                    size='lg'
                    m='2em'
                >
                    To start adding tasks just press continue.
                    <Button
                        ml='2em'
                        as={Link}
                        to='AddTask'
                        colorScheme='whatsapp'
                    >
                        Continue
                    </Button>
                </Heading>
            </Flex>
        </VStack>
    );
};