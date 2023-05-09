import { Box, Heading, Image } from "@chakra-ui/react";
import "./School.css";
export default function School() {
  return (
    <Box className="main">
      <Heading>Kings Coding School</Heading>
      <Box className="body2">
        <Image
          className="image"
          src="https://www.joonsquare.com/usermanage/image/business/h-d-sr-sec-school-rohtak-1032/h-d-sr-sec-school-rohtak-hd7.jpg"
          alt="err"
        />
      </Box>
    </Box>
  );
}
