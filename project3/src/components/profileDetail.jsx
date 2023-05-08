import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Profile({ ele }) {
  const obj = useContext(AppContext);
  function handleClick(e) {
    e.preventDefault();
    window.location.reload()
    obj.setStatus(false);

  }
  return (
    <Box textAlign="center">
      <Box margin="12px">
        <Image borderRadius="50%" src={ele.image} alt="Image" />
      </Box>
      <Box margin="12px">
        <Heading fontSize="20px">Name: {ele.name}</Heading>
        <Heading fontSize="20px">Email: {ele.email}</Heading>
      </Box>
      <Box>
        <Button onClick={handleClick} backgroundColor="#D6383A">
          Logout
        </Button>
      </Box>
    </Box>
  );
}
