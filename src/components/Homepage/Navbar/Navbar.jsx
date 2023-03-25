import {
  Box,
  Flex,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const { auth, token, loading, error } = useSelector((state) => state.userReducer)
  console.log(auth)

  const nav = useNavigate()
  return (
    <>
      <Box zIndex={1000} position={"fixed"} top={0} w={"100%"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"} bg={"rgb(0, 157, 255)"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} cursor={"pointer"} onClick={() => {
            nav("/")
          }} color="white"> My Notes App</Box>
          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
              <Button display={auth === true ? "block" : "none"} _hover={{ backgroundColor: "rgb(27, 0, 178)" }} bg={"rgb(0, 119, 255)"} color={"rgb(255, 255, 255)"} onClick={() => {
                nav("/notes")
              }}>All Notes</Button>
              <Button display={auth === true ? "none" : "block"} _hover={{ backgroundColor: "rgb(27, 0, 178)" }} bg={"rgb(0, 119, 255)"} color={"rgb(255, 255, 255)"} onClick={() => {
                nav("/register")
              }}>Sign up</Button>
              <Button display={auth === true ? "none" : "block"} _hover={{ backgroundColor: "rgb(27, 0, 178)" }} bg={"rgb(0, 119, 255)"} color={"rgb(255, 255, 255)"} onClick={() => {
                nav("/login")
              }}>Login</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}