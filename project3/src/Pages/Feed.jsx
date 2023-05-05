import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/Context";

export default function Feed() {
  const obj = useContext(AppContext);
  console.log(obj);
  return (
    //import container here with the details of feed means post of students including Teacher.
    <Box>
        <Heading color="red">{obj.name}</Heading>
    </Box>
  );
}
