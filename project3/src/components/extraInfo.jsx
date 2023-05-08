import { Box, Heading, Image, Text } from "@chakra-ui/react";
import hello from "../hello.png";

export default function Info() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      padding="20px"
      textAlign="center"
      backgroundColor="#F2C4EF"
    >
      <Box display="flex" justifyContent={"center"} flexDirection={"column"} width="50%" >
        <Heading marginBottom="20px" borderBottom="1px solid">Did you know that fact?</Heading>
        <Text>
        The world’s first computer programmer was a renowned female mathematician
        </Text>
      </Box>
      <Box width="50%" display="flex" justifyContent={"center"}>
        <Image className="info" margin="0px" width={"50%"} src={hello} alt="image" />
      </Box>
    </Box>
  );
}
