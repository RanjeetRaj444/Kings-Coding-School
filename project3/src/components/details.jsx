import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function MentorsDetail({ ele }) {
  const [state, setState] = useState(false);
  return (
    <Box
      border="1px solid grey"
      width="70%"
      margin="auto"
      alignItems="center"
      marginBottom="20px"
      padding="12px"
      backgroundColor="#818E8F"
    >
      <Box textAlign="center">
        <Image
          width="50%"
          margin="auto"
          borderRadius="50%"
          src={ele.image}
          alt="image"
        />
      </Box>
      <Box textAlign="center">
        <Heading> Name: {ele.name}</Heading>
        <Heading>Mob: {ele.mob}</Heading>
        <Heading color="red">Email: {ele.email}</Heading>
        <Heading >Role: {ele.role}</Heading>
        <Heading>About:-- </Heading>
        <Text color="#0F3817">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet sed
          animi ab expedita incidunt cum ratione perspiciatis autem perferendis
          repudiandae porro corporis, quaerat explicabo quasi necessitatibus
          quibusdam possimus, quo natus debitis! Quibusdam cupiditate illum
          itaque, quasi provident qui quaerat natus fuga quod laboriosam!
          Nesciunt, quis?
        </Text>
      </Box>
      <Box textAlign="center" padding="12px">
        <Button backgroundColor="#F2D7C4" onClick={() => setState(!state)}>
          {!state ? "Follow" : "Unfollow"}
        </Button>
      </Box>
    </Box>
  );
}
