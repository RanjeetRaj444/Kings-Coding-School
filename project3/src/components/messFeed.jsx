import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
// import { CgCalendarDates } from "react-icons/cg";
import { FcDislike, FcLike } from "react-icons/fc";
// import { IoHeartDislikeSharp } from "react-icons/io";

export default function MessFeed({ ele }) {
  const [Liked, setLike] = useState(10);
  const [active, setAxtive] = useState(false);
  // console.log(Liked);
  function handleLike(e) {
    e.preventDefault();
    setLike(Liked + 1);
    setAxtive(true);
  }
  function handleDislike(e) {
    e.preventDefault();
    setLike(Liked - 1);
    setAxtive(false);
  }
  return (
    <Box
      padding="20px"
      width="70%"
      margin="auto"
      marginBottom="12px"
      backgroundColor="#E0B082"
    //   border="1px solid red"
    >
      <Box padding="12px" border="1px solid grey" textAlign="center">
        <Text>G.Henderson reviesed a mentor</Text>
      </Box>

      <Box
        textAlign="center"
        padding="12px"
        border="1px solid grey"
        display="flex"
      >
        <Image marginRight="12px" width="20%" src={ele.image} alt="image" />
        <Box textAlign="center">
          <Heading marginBottom="12px">{ele.title}</Heading>
          <Text>{ele.comments}</Text>
        </Box>
      </Box>

      <Box
       padding="12px"
        textAlign="center"
        border="1px solid grey"
        display="flex"
        justifyContent="space-evenly"
      >
        <Box>
          <Text>Total rating : {ele.rating}</Text>
        </Box>
        <Box display="flex" justifyContent="space-evenly">
          <Button isDisabled={active} onClick={handleLike}>
            <Heading>
              <FcLike />
            </Heading>
          </Button>
          <Text>{Liked}</Text>
          <Button isDisabled={active ? false : true} onClick={handleDislike}>
            <Heading>
              <FcDislike />
            </Heading>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
