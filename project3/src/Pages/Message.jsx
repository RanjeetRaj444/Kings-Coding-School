import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Message() {
  const [data, setData] = useState([]);
  function fetchMessage() {
    fetch("https://json-server-is-live.onrender.com/messages")
      .then((res) => res.json())
      .then((data1) => {
        setData(data1);
        console.log(data1);
      });
  }
  useEffect(() => {
    fetchMessage();
  }, []);
  return (
    <Box>
      <Heading margin="40px" textAlign="center">
        Notifications
      </Heading>
      {data.map((ele) => (
        <Box
        key={ele.id}
          width="80%"
          margin="auto"
          marginBottom="20px"
          padding="30px"
          backgroundColor="#3BA39C"
        >
          <Heading padding="8px" backgroundColor="#A1F0B2" marginBottom="20px">
            {ele.creator}
          </Heading>
          <Heading
            padding="8px"
            backgroundColor="#F79554"
            marginBottom="20px"
          >
            {ele.title}
          </Heading>
          <Text
            padding="8px"
            backgroundColor="white"
            marginBottom="20px"
            color="#4D0B0C"
          >
            {ele.message}
          </Text>
        </Box>
      ))}
    </Box>
  );
}
