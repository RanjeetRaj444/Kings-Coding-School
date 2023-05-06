// import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heading, Tag, TagLabel } from "@chakra-ui/react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { CgFeed } from "react-icons/cg";
import { BsPeopleFill, BsFillInboxesFill } from "react-icons/bs";
import { BsPersonVideo2, BsHospital } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [state1, setSate1] = useState(true);
  const [state2, setSate2] = useState(false);
  const [state3, setSate3] = useState(false);
  const [state4, setSate4] = useState(false);
  const [state5, setSate5] = useState(false);
  const [state6, setSate6] = useState(false);
  const [state7, setSate7] = useState(false);
  const [state8, setSate8] = useState(false);
  function handleActive1(e) {
    e.preventDefault();
    setSate1(true);
    setSate2(false);
    setSate3(false);
    setSate4(false);
    setSate5(false);
    setSate6(false);
    setSate7(false);
    setSate8(false);
  }
  function handleActive2(e) {
    e.preventDefault();
    setSate1(false);
    setSate2(true);
    setSate3(false);
    setSate4(false);
    setSate5(false);
    setSate6(false);
    setSate7(false);
    setSate8(false);
  }
  function handleActive3(e) {
    e.preventDefault();
    setSate1(false);
    setSate2(false);
    setSate3(true);
    setSate4(false);
    setSate5(false);
    setSate6(false);
    setSate7(false);
    setSate8(false);
  }
  function handleActive4(e) {
    e.preventDefault();
    setSate1(false);
    setSate2(false);
    setSate3(false);
    setSate4(true);
    setSate5(false);
    setSate6(false);
    setSate7(false);
    setSate8(false);
  }
  function handleActive5(e) {
    e.preventDefault();
    setSate1(false);
    setSate2(false);
    setSate3(false);
    setSate4(false);
    setSate5(true);
    setSate6(false);
    setSate7(false);
    setSate8(false);
  }
  function handleActive6(e) {
    e.preventDefault();
    setSate1(false);
    setSate2(false);
    setSate3(false);
    setSate4(false);
    setSate5(false);
    setSate6(true);
    setSate7(false);
    setSate8(false);
  }
  function handleActive7(e) {
    e.preventDefault();
    setSate1(false);
    setSate2(false);
    setSate3(false);
    setSate4(false);
    setSate5(false);
    setSate6(false);
    setSate7(true);
    setSate8(false);
  }
  function handleActive8(e) {
    e.preventDefault();
    setSate1(false);
    setSate2(false);
    setSate3(false);
    setSate4(false);
    setSate5(false);
    setSate6(false);
    setSate7(false);
    setSate8(true);
  }
  return (
    <Tag
      padding="12px"
      alignItems="left"
      display="flex"
      flexDirection="column"
      className="navbar-Components"
    >
      <Heading
        onClick={handleActive1}
        // {state1&&backgroundColor="#E082C9"}
        backgroundColor={state1 && "#E082C9"}
        display="flex"
        // justifyContent="space-evenly"
        paddingTop="10px"
        fontSize="20px"
      >
        <CgFeed />
        <Link to="/">Feed</Link>
      </Heading>
      <Heading
        onClick={handleActive2}
        // {state1&&backgroundColor="#E082C9"}
        backgroundColor={state2 && "#E082C9"}
        display="flex"
        // justifyContent="space-evenly"
        paddingTop="10px"
        fontSize="20px"
      >
        <BsPersonVideo2 />
        <Link to="/live">Session</Link>
      </Heading>
      <Heading
        onClick={handleActive3}
        // {state1&&backgroundColor="#E082C9"}
        backgroundColor={state3 && "#E082C9"}
        display="flex"
        // justifyContent="space-evenly"
        paddingTop="10px"
        fontSize="20px"
      >
        <BsFillInboxesFill />
        <Link to="/message">Message</Link>
      </Heading>
      <Tag
        padding="12px"
        alignItems="left"
        display="flex"
        flexDirection="column"
        className="my-network"
      >
        <TagLabel fontSize="17px" padding="5px" color="grey">
          MY NETWORK
        </TagLabel>
        <Heading
          onClick={handleActive4}
          // {state1&&backgroundColor="#E082C9"}
          backgroundColor={state4 && "#E082C9"}
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <FaSchool />
          <Link to="/school"> School</Link>
        </Heading>
        <Heading
          onClick={handleActive5}
          // {state1&&backgroundColor="#E082C9"}
          backgroundColor={state5 && "#E082C9"}
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <BsPeopleFill />
          <Link to="/mentors">Mentor</Link>
        </Heading>
        <Heading
          onClick={handleActive6}
          // {state1&&backgroundColor="#E082C9"}
          backgroundColor={state6 && "#E082C9"}
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <BsPeopleFill />
          <Link to="/Students">Students</Link>
        </Heading>
        <Heading
          onClick={handleActive7}
          // {state1&&backgroundColor="#E082C9"}
          backgroundColor={state7 && "#E082C9"}
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <FaUniversity />
          <Link to="/university">University</Link>
        </Heading>
        <Heading
          onClick={handleActive8}
          // {state1&&backgroundColor="#E082C9"}
          backgroundColor={state8 && "#E082C9"}
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <BsHospital />
          <Link to="/companies">Companies</Link>
        </Heading>
      </Tag>
    </Tag>
  );
}
