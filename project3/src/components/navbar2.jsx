import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import DrawerExample from "./Logout";
export default function Navbar2({ ele }) {
  return (
    <Box
      display="flex"
      justifyContent="right"
      padding="12px"
      alignItems="center"
    >
      {" "}
     <Link to="/message"> <Button marginRight="12px">
        <Heading>
          <IoIosNotifications />
        </Heading>
      </Button></Link>
      {ele.image ? (
        <DrawerExample ele={ele}/>
      ) : (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}
    </Box>
  );
}
