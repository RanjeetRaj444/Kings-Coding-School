import { Box, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import Navbar2 from "./navbar2";
import DrawerExample2 from "./navbarRes";

export default function ResNav({ ele1 }) {
  const [midScreenSize] = useMediaQuery('(min-width: 780px)');
  return (
    <Box className="top-Navbar">
      <DrawerExample2 />
      <Box className="App3">
        <Image
          className="logo"
          src="https://wallpapercave.com/wp/wp3495933.jpg"
          alt="image"
        />
        <Heading fontSize={midScreenSize ?  "38px":"20px"}>
          Kings Coding School
        </Heading>
      </Box>
      <Navbar2 ele={ele1} />
    </Box>
  );
}
