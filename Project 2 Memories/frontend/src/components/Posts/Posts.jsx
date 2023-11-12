import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";

function Posts() {
  const posts = useSelector((state) => state.ports);
  return (
    <Flex flexWrap={'wrap'}>
      {posts.map((v, i) => (
        <Post key={i} v={v} />
      ))}
    </Flex>
  );
}

export default Posts;
