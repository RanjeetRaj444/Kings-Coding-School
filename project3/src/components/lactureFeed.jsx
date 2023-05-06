import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { CgCalendarDates } from "react-icons/cg";
export default function LacrureFeed({ ele }) {
  return (
    <Box
      padding="20px"
      width="70%"
      margin="auto"
      marginBottom="12px"
      backgroundColor="#82E0AE"
      //   marginTop="12px"
      //   border="1px solid red"
    >
      <Box padding="12px" border="1px solid grey" textAlign="center">
        <Text>Your school scheduled a new live session</Text>
      </Box>
      <Box
        border="1px solid grey"
        textAlign="center"
        display="flex"
        justifyContent="space-between"
        padding="20px"
      >
        <Box
          border="1px solid grey"
          borderRadius="80%"
          width="20%"
          textAlign="center"
        >
          <Box padding="20px">
            <Heading display="flex" justifyContent="center">
              <CgCalendarDates />
            </Heading>
            <Text>date:</Text>
            <Text>Time:{ele.Time}</Text>
          </Box>
        </Box>
        <Box display="flex" width="60%">
          <Image width="20%" src={ele.image} alt="image" />
          <Heading>{ele.title}</Heading>
        </Box>
      </Box>
      <Box
        padding="12px"
        border="1px solid grey"
        textAlign="center"
        display="flex"
        justifyContent="space-evenly"
      >
        <Text>Particepent</Text>
        <Button backgroundColor="#2B52E0">JOIN</Button>
      </Box>
    </Box>
  );
}
