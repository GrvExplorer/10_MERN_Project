import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  IconButton,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { createPost } from "../../action";

const MyForm = () => {

  const [formData, setFormData] = useState({
    title: "",
    creator: "",
    email: "",
    message: "",
    tags: [],
    likeCount: 10,
    selectedFile: null,
  });

  const [errorMessages, setErrorMessages] = useState({
    title: "",
    creator: "",
    email: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing in the field.
    setErrorMessages({ ...errorMessages, [name]: "" });
  };

  const handleTagClose = (tagIndex) => {
    const updatedTags = [...formData.tags];
    updatedTags.splice(tagIndex, 1);
    setFormData({ ...formData, tags: updatedTags });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, selectedFile });
  };

  const handleClearForm = () => {
    setFormData({
      title: "",
      creator: "",
      email: "",
      message: "",
      tags: [],
      selectedFile: null,
    });

    setErrorMessages({
      title: "",
      creator: "",
      email: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrorMessages = {};
    if (!formData.title) {
      newErrorMessages.title = "Name is required. Please provide your name.";
      hasError = true;
    }
    if (!formData.creator) {
      newErrorMessages.creator =
        "Creator Name is required. Please provide your name.";
      hasError = true;
    }
    if (!formData.email) {
      newErrorMessages.email = "Email is required. Please provide your email.";
      hasError = true;
    }
    if (formData.tags.length === 0) {
      newErrorMessages.tags = "At least one tag is required";
      hasError = true;
    }
    if (!formData.selectedFile) {
      newErrorMessages.selectedFile = "A file is required";
      hasError = true;
    }
    if (!formData.message) {
      newErrorMessages.message = "A short message is required";
      hasError = true;
    }
    if (hasError) {
      setErrorMessages(newErrorMessages);
      return;
    }
    createPost(formData);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction={"column"}>
      <Box
        maxW="450px"
        h="fit-content"
        minW={"400px"}
        p="10"
        boxShadow="lg"
        borderRadius="md"
        bg="white"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing="4">
            <FormControl id="name">
              <FormLabel>
                <Text color={colorMode === "light" ? "black" : "white"}>
                  Name
                </Text>
              </FormLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                borderColor={errorMessages.title ? "red" : "gray"}
              />
              {errorMessages.title && (
                <div style={{ color: "red" }}>{errorMessages.title}</div>
              )}
            </FormControl>

            <FormControl id="creator">
              <FormLabel>
                <Text color={colorMode === "light" ? "black" : "white"}>
                  Creator
                </Text>
              </FormLabel>
              <Input
                type="text"
                name="creator"
                value={formData.creator}
                onChange={handleChange}
                borderColor={errorMessages.name ? "red" : "gray"}
              />
              {errorMessages.creator && (
                <div style={{ color: "red" }}>{errorMessages.creator}</div>
              )}
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                borderColor={errorMessages.email ? "red" : "gray"}
              />
              {errorMessages.email && (
                <div style={{ color: "red" }}>{errorMessages.email}</div>
              )}
            </FormControl>

            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                borderColor={errorMessages.message ? "red" : "gray"}
              />
              {errorMessages.message && (
                <div style={{ color: "red" }}>{errorMessages.message}</div>
              )}
            </FormControl>

            <FormControl id="tags">
              <FormLabel>Tags</FormLabel>
              <Stack spacing="1">
                <Flex gap={"2"} flexWrap={"wrap"}>
                  {formData.tags.map((tag, index) => (
                    <Tag key={index} size="md" w="fit-content">
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleTagClose(index)} />
                    </Tag>
                  ))}
                </Flex>
                <Input
                  type="text"
                  name="tags"
                  placeholder="Add tags"
                  borderColor={errorMessages.tags ? "red" : "gray"}
                  onChange={(e) => {
                    if (e.target.value[e.target.value.length - 1] === " ") {
                      if (e.target.value[0] !== " ") {
                        setFormData({
                          ...formData,
                          tags: [...formData.tags, e.target.value],
                        });
                        e.target.value = "";
                      } else {
                        e.target.value = "";
                      }
                    }
                  }}
                />
                {errorMessages.tags && (
                  <div style={{ color: "red", height: "fit-content" }}>
                    {errorMessages.tags}
                  </div>
                )}
              </Stack>
            </FormControl>

            <FormControl id="file" mb={"4"}>
              <FormLabel>Choose a File</FormLabel>

              <Input
                type="file"
                pt="1"
                pl="0"
                h="fit-content"
                name="file"
                onChange={handleFileChange}
                border={"none"}
              />
              {errorMessages.selectedFile && (
                <div style={{ color: "red" }}>{errorMessages.selectedFile}</div>
              )}
            </FormControl>

            <Stack direction="row" spacing="4">
              <Button type="submit" colorScheme="teal">
                Submit
              </Button>
              <Button type="button" onClick={handleClearForm} colorScheme="red">
                Clear
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
      <Flex justifyContent={"end"} mt="8">
        <Button onClick={toggleColorMode} px={"4"} py={"2"} shadow={"md"}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Flex>
    </Flex>
  );
};

export default MyForm;
