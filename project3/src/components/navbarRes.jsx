import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  DrawerHeader,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Routs/Navbar";
import { RiArchiveDrawerFill } from "react-icons/ri";
export default function DrawerExample2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box className="drawer">
      <Button
        className="drawer"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        {/* <Heading> */}
            {/* <RiArchiveDrawerFill /> */}
            Menu
            {/* </Heading> */}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
<DrawerHeader><Heading>Navbar</Heading></DrawerHeader>
          <DrawerBody>
            <Navbar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
