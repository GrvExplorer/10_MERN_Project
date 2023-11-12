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
} from "@chakra-ui/react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tags: [],
    selectedFile: null,
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
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
      name: "",
      email: "",
      message: "",
      tags: [],
      selectedFile: null,
    });

    setErrorMessages({
      name: "",
      email: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    const newErrorMessages = {};

    // Check if any of the required fields are empty and set error messages.
    if (!formData.name) {
      newErrorMessages.name = "Name is required. Please provide your name.";
      hasError = true;
    }
    if (!formData.email) {
      newErrorMessages.email = "Email is required. Please provide your email.";
      hasError = true;
    }
    // Remove the error message for the Message field
    // by not setting an error message for it.

    if (formData.tags.length === 0) {
      newErrorMessages.tags = "At least one tag is required";
      hasError = true;
    }
    if (!formData.selectedFile) {
      newErrorMessages.selectedFile = "A file is required";
      hasError = true;
    }

    setErrorMessages(newErrorMessages);

    if (hasError) {
      return;
    }

    // You can proceed with form submission if there are no errors.
    console.log(formData);
  };

  return (
    <Box
      maxW="450px"
      h='fit-content'
      minW={'400px'}
      p="10"
      boxShadow="lg"
      borderRadius="md"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              borderColor={errorMessages.name ? "red" : "gray"}
            />
            {errorMessages.name && (
              <div style={{ color: "red" }}>{errorMessages.name}</div>
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
              <Flex gap={'2'} flexWrap={'wrap'}>
              {formData.tags.map((tag, index) => (
                <Tag key={index} size="md" w='fit-content'>
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
                  if (e.target.value[e.target.value.length -1] === ' '){
                    if (e.target.value[0] !== ' ') {
                      setFormData({
                        ...formData,
                        tags: [...formData.tags, e.target.value],
                      });
                      e.target.value = "";
                    }else{
                      e.target.value = "";
                    }
                  }
                }}
              />
              {errorMessages.tags && (
                <div style={{ color: "red", height: 'fit-content' }}>{errorMessages.tags}</div>
              )}
            </Stack>
          </FormControl>

          <FormControl id="file" 
  mb={'4'}
          >
            <FormLabel>Choose a File</FormLabel>

            <Input
              type="file"
              pt='1'
              pl='0'
              h='fit-content'
              name="file"
              onChange={handleFileChange}
              border={'none'}
            />
            {errorMessages.selectedFile && (
              <div  style={{ color: "red" }}>{errorMessages.selectedFile}</div>
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
  );
};

export default MyForm;
