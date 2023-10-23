import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const Modalx = ({ data, isOpen, onClose }) => {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader pb={0} fontSize={"3xl"}>
            {data.title}
          </ModalHeader>
          <HStack justifyContent={'space-between'} 
          alignItems={'center'}>
            <ModalHeader pt={0} fontWeight={"normal"} color={"purple.400"} textAlign={'center'}>
              {data.author}
            </ModalHeader>
            <Box
              as="button"
              borderRadius="md"
              bg="black"
              color="white"
              mx={7}
              px={4}
              h={8}
            >
              {data.publishYear}
            </Box>
          </HStack>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              distinctio, provident laborum at officiis alias quae cum nesciunt
              ratione ullam aperiam numquam nihil suscipit, dolore dicta minima
              eaque totam labore.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modalx;
