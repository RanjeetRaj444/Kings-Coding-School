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
      // backgroundColor={"black"}
      borderBottom={"1px solid grey"}
    >
     <Link to="/message"> <Button backgroundColor={"black"} color={"white"} marginRight="12px">
        <Heading>
          <IoIosNotifications />
        </Heading>
      </Button></Link>
      {ele.image ? (
        <DrawerExample ele={ele}/>
      ) : (
        <Link to="/login">
          <Button backgroundColor={"black"} color={"white"}>Login</Button>
        </Link>
      )}
    </Box>
  );
}
