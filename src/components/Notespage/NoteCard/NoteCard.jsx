import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./style.css";
import notebg from "../../../assets/note_bg.png";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function NoteCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  // const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);

  const updateNote = () => {

    dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }))
    onClose()

  }

  return (
    <Card
      // backgroundImage={`url(${notebg})`} 
      backgroundColor={"rgb(0, 128, 255)"}
    >
      <CardBody>
        <VStack>
          <Heading>{title}</Heading>
          <Text>{body}</Text>

          <Flex gap={4}>
            <>
              <Button _hover={{ backgroundColor: "rgb(255, 0, 255)" }} onClick={onOpen}>Update</Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={tempTitle}
                      placeholder="Please enter title"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                    <Textarea
                      mt={8}
                      value={tempBody}
                      placeholder={"Please enter description"}
                      onChange={(e) => setBody(e.target.value)}
                    ></Textarea>
                  </ModalBody>

                  <ModalFooter gap={"20px"}>
                    <Button colorScheme={"blue"} onClick={updateNote}>
                      Update
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Button
              _hover={{ backgroundColor: "rgb(255, 0, 255)" }}
              onClick={() => {
                dispatch(deleteNotes(_id));
              }}
            >
              Delete
            </Button>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}
