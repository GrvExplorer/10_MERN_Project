import React from "react";
import {
  Box,
  Image,
  Text,
  Tag,
  Flex,
  IconButton,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineDelete } from "react-icons/ai";

const Card = ({ v }) => {
  return (
    <Box
      maxW="400px"
      h="fit-content"
      m="4"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image
        src="https://source.unsplash.com/random/500x300"
        alt="Sample Image"
        w="100%"
        h="auto"
        maxH="300px"
        objectFit="cover"
      />
      <Box px="4" py="6">
        <HStack justifyContent={"space-between"} pb={'8'}>
          <Text as={"h1"} fontSize={"xl"} fontWeight={"medium"}>
            {v.title}
          </Text>
          <Text fontSize={"md"} fontWeight={"medium"}>
            ~{v.creator}
          </Text>
        </HStack>
        <Text mt="3" fontSize="xl" fontWeight="bold">
          {v.message}
        </Text>
        <Flex justify="space-between" mt="3">
          <Flex maxW="151px" gap={"2"} flexWrap={"wrap"} overflowY={"hidden"}>
            {v.tags.map((v, i) => (
              <Tag key={i} colorScheme="twitter" h="6" size="sm">
                {v}
              </Tag>
            ))}
            {/* <HStack mt="3" spacing="2">
              <Tag colorScheme="teal" size="sm">
                Tag 1
              </Tag>
              <Tag colorScheme="teal" size="sm">
                Tag 2
              </Tag>
              <Tag colorScheme="teal" size="sm">
                Tag 3
              </Tag>
            </HStack>
            <HStack mt="3" spacing="2">
              <Tag colorScheme="teal" size="sm">
                Tag 1
              </Tag>
              <Tag colorScheme="teal" size="sm">
                Tag 2
              </Tag>
              <Tag colorScheme="teal" size="sm">
                Tag 3
              </Tag>
            </HStack> */}
          </Flex>
          <Flex gap="2" alignItems="end">
            <IconButton
              icon={<AiOutlineLike />}
              colorScheme="teal"
              aria-label="Like"
            />
            <Text fontSize="sm" color="gray.500">
              {v.likeCount} Likes
            </Text>
            <IconButton
              icon={<AiOutlineDelete />}
              colorScheme="red"
              aria-label="Delete"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
