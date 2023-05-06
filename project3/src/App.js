// import logo from "./logo.svg";
import { Box, Heading, Image } from "@chakra-ui/react";
// import "./App.css";
import Navbar from "./Routs/Navbar";
import RouteLinks from "./Routs/Routs";
function App() {
  return (
    <Box
      border="1px solid"
      display="flex"
      justifyContent="space-between"
      className="App"
      
    >
      <Box backgroundColor="#EBA9AA" position="sticky" top="0px" height="940px" border="1px solid"  width="20%">
        <Box
          width="80%"
          borderBottom="1px solid grey"
          display="flex"
          justifyContent="space-evenly"
          padding="12px"
          alignItems="center"
          // margin="12px 12px"
          border="1px solid grey"
          margin="auto"
          marginTop="20px"
          marginBottom="20px"
        >
          <Image
            width="20%"
            borderRadius="102px"
            src="https://wallpapercave.com/wp/wp3495933.jpg"
            alt="image"
          />
          <Heading fontSize="20px">Kings School</Heading>
        </Box>
        <Box width="80%" margin="auto" className="navbar">
          <Navbar />
        </Box>
      </Box>

      <Box  width="80%" className="body">
        <Box backgroundColor="white" position="sticky" top="0px" border="1px solid" className="top-Navbar">
          <Heading>Navbar</Heading>
        </Box>
        <Box backgroundColor="#82C6E0" padding="20px" className="main-body">
          <RouteLinks />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
