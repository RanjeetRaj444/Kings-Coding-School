import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Profile from "./profileDetail";

export default function DrawerExample({ ele }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Image
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        borderRadius="50%"
        width="5%"
        src={ele.image}
        alt="image"
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">
            <Heading>Profile</Heading>
          </DrawerHeader>

          <DrawerBody>
            <Profile ele={ele} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
