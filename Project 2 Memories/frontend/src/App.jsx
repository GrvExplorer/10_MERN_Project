import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import Form from "./components/Form/Form";

import { getPosts } from "./action";
import Posts from "./components/Posts/Posts";
import memories from "./images/memories.jpg";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <VStack maxW={"8xl"} gap={"20"} m="auto">
      <Container
        maxW={"8xl"}
        bg={"whiteAlpha.400"}
        position={"static"}
        display={"flex"}
        justifyContent={"center"}
        shadow={"xl"}
        rounded={"lg"}
        mt={"10"}
      >
        <Flex gap={"8"} alignItems={"center"} my={"4"}>
          <Heading as={"h1"} size={"2xl"} color={"blue.200"}>
            Memories
          </Heading>
          <Image
            boxSize={"20"}
            rounded={"full"}
            src={memories}
            alt="memories"
          />
        </Flex>
      </Container>
      <Box
        w="full"
        display={"flex"}
        justifyContent={"space-between"}
        px={{ md: "12" }}
      >
        <Posts />

        <Form />
      </Box>
    </VStack>
  );
}

export default App;
