import { Box, Heading, Text } from "@chakra-ui/react";

export default function Homepage() {
  return (
    <Box padding={8} margin={"auto"} w={"85%"}> 
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        Welcome to my Note App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        A note application is a software program that allows users to create,
        organize, and manage their digital notes.
      </Text>
    </Box>
  ); 
}
