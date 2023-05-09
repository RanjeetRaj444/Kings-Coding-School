import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./student.css";
export default function Students() {
  const [data, setdata] = useState([]);
  function fetchData() {
    fetch("https://json-server-is-live.onrender.com/students")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      {data.map((res) => (
        <Box className="student-container" key={res.id}>
          <Box width="40%">
            <Image width="50%" src={res.image} alt="image" />
          </Box>
          <Box>
            <Heading>Name: {res.name}</Heading>
            <Text>Address: {res.address}</Text>
            <Text>Course: {res.course}</Text>
            <Text>Date Of Birth: {res.dob}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
