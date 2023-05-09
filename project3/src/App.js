// import logo from "./logo.svg";
import { Box, Heading, Image } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Routs/Navbar";
import RouteLinks from "./Routs/Routs";
import Info from "./components/extraInfo";
// import { Link } from "react-router-dom";
import Navbar2 from "./components/navbar2";
import { useContext } from "react";
import { AppContext } from "./context/Context";
// import DrawerExample2 from "./components/navbarRes";
import ResNav from "./components/responsiveNavbar";
// import DrawerExample from "./components/Logout";

function App() {
  const obj = useContext(AppContext);
  // const [midScreenSize] = useMediaQuery("(min-width:750px)");
  return (
    <Box className="App">
      {/* {midScreenSize ? ( */}
     
      <Box className="App2">
        <Box className="App3">
          <Image
            className="logo"
            src="https://wallpapercave.com/wp/wp3495933.jpg"
            alt="image"
          />
          <Heading fontSize= "28px" >Kings Coding School</Heading>
        </Box>
        <Box width="80%" margin="auto" className="navbar">
          <Navbar />
        </Box>
      </Box>
      {/* ) : ( */}

      {/* )} */}

      <Box className="body">
        <ResNav ele1={obj.data}/>
        <Box className="body-Navbar">
        {/* <DrawerExample2 /> */}
          <Navbar2 ele={obj.data} />
        </Box>
        <Box>
          <Info />
        </Box>
        <Box padding="20px" className="main-body">
          <RouteLinks />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
