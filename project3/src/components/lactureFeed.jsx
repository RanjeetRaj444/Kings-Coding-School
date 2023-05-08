import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { CgCalendarDates } from "react-icons/cg";
import "./lactureFeed.css";
// import { useNavigate } from "react-router-dom";
export default function LacrureFeed({ ele }) {
  // const navigate=useNavigate()
  //   function handleNav(e){
  // e.preventDefault()
  // navigate("https://www.youtube.com/watch?v=mBrdvtgc7q0&ab_channel=AbhiOfficialLofi")
  //   }
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
      <Box className="lecture-feed">
        <Box
          className="shedule"
          border="1px solid grey"
          borderRadius="80%"
         
          textAlign="center"
        >
          <Box padding="20px">
            <Heading display="flex" justifyContent="center">
              <CgCalendarDates />
            </Heading>
            <Text>date:{ele.date}</Text>
            <Text>Time:{ele.Time}</Text>
          </Box>
        </Box>
        <Box className="poster" display="flex" >
          <Image width="20%" src={ele.image} alt="image" />
          <Box>
          <Heading>{ele.title}</Heading>
          <Text fontSize="32px" color="#565C20">By: {ele.name}</Text>
          </Box>
        </Box>
      </Box>
      <Box
        padding="12px"
        border="1px solid grey"
        textAlign="center"
        display="flex"
        justifyContent="space-evenly"
      >
        <Text> 22 Prticipant</Text>
        <a href="https://www.youtube.com/watch?v=BsDoLVMnmZs&ab_channel=CodeWithHarry">
          {" "}
          <Button backgroundColor="#2B52E0">JOIN</Button>
        </a>
      </Box>
    </Box>
  );
}
