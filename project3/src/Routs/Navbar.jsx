// import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heading, Tag, TagLabel } from "@chakra-ui/react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { CgFeed } from "react-icons/cg";
import { BsPeopleFill, BsFillInboxesFill } from "react-icons/bs";
import { BsPersonVideo2, BsHospital } from "react-icons/bs";

export default function Navbar() {
  return (
    <Tag
      padding="12px"
      alignItems="left"
      display="flex"
      flexDirection="column"
      className="navbar-Components"
    >
      <Heading
        display="flex"
        // justifyContent="space-evenly"
        paddingTop="10px"
        fontSize="20px"
      >
        <CgFeed />
        <Link to="/">Feed</Link>
      </Heading>
      <Heading
        display="flex"
        // justifyContent="space-evenly"
        paddingTop="10px"
        fontSize="20px"
      >
        <BsPersonVideo2 />
        <Link to="/live">Session</Link>
      </Heading>
      <Heading
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
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <FaSchool />
          <Link to="/school"> School</Link>
        </Heading>
        <Heading
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <BsPeopleFill />
          <Link to="/mentors">Mentor</Link>
        </Heading>
        <Heading
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <BsPeopleFill />
          <Link to="/Students">Students</Link>
        </Heading>
        <Heading
          display="flex"
          // justifyContent="space-evenly"
          paddingTop="10px"
          fontSize="20px"
        >
          <FaUniversity />
          <Link to="/university">University</Link>
        </Heading>
        <Heading
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
