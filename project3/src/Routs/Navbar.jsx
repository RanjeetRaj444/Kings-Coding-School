// import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Heading, Tag, TagLabel } from "@chakra-ui/react";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { CgFeed } from "react-icons/cg";
import { BsPeopleFill, BsFillInboxesFill } from "react-icons/bs";
import { BsPersonVideo2, BsHospital } from "react-icons/bs";
import { useState } from "react";

import "./Navbar.css";

const topMenu = [
  { name: "Feed", iconName: CgFeed, routes: "/" },
  { name: "Session", iconName: BsPersonVideo2, routes: "/live" },
  { name: "Message", iconName: BsFillInboxesFill, routes: "/message" },
];

const bottomMenu = [
  { name: "School", iconName: FaSchool, routes: "/school" },
  { name: "Mentors", iconName: BsPeopleFill, routes: "/mentors" },
  { name: "Students", iconName: BsPeopleFill, routes: "/students" },
  { name: "University", iconName: FaUniversity, routes: "/university" },
  { name: "Comapanies", iconName: BsHospital, routes: "/companies" },
];

export default function Navbar() {
  const [active, setActive] = useState(null);

  const activeMenu = (item) => {
    setActive(item);
  };

  return (
    <Tag
      padding="12px"
      alignItems="left"
      display="flex"
      flexDirection="column"
      className="navbar-Components category"
    >
      {topMenu.map((item, index) => {
        return (
          <Heading
            key={item.name}
            fontSize="28px"
            onClick={() => activeMenu(item)}
            className={`menu ${active === item && "active"}`}
          >
            <item.iconName />
            <Link to={item.routes}>{item.name}</Link>
          </Heading>
        );
      })}

      <Tag
        padding="12px"
        alignItems="left"
        display="flex"
        flexDirection="column"
        className="my-network category"
      >
        <TagLabel fontSize="17px" padding="5px" color="grey">
          MY NETWORK
        </TagLabel>

        {bottomMenu.map((item, index) => (
          <Heading
            key={item.name}
            fontSize="28px"
            onClick={() => activeMenu(item)}
            className={`menu ${active === item && "active"}`}
          >
            <item.iconName />
            <Link to={item.routes}> {item.name}</Link>
          </Heading>
        ))}
      </Tag>
    </Tag>
  );
}
