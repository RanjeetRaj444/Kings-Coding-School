import { Box, Heading, Image } from "@chakra-ui/react";
import "./School.css";
export default function School() {
  return (
    <Box className="main">
      <Heading>Kings Coding School</Heading>
      <Box className="body2">
        <Image
          className="image"
          src="https://mcmscache.epapr.in/post_images/website_451/post_31721673/full.jpg"
          alt="err"
        />
      </Box>
    </Box>
  );
}
