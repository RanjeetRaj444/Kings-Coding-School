import { Box, FormLabel, Heading, Input } from "@chakra-ui/react";
// import RouteLinks from "../Routs/Routs";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Box width="50%" margin="auto" textAlign="center">
      <form action="">
        <FormLabel color="#964405">Email</FormLabel>
        <Input
          backgroundColor="#F4B400"
          color="white"
          type="email"
          placeholder="Email"
        />
        <FormLabel color="#5C3A1F">Password</FormLabel>
        <Input
          backgroundColor="#073D3D"
          color="white"
          type="password"
          placeholder="Password"
        />
        <Input
          width="30%"
          margin="auto"
          backgroundColor="#4285F4"
          type="submit"
          value="Login"
        />
      </form>
      <Heading
        color="#51679E"
        border="1px solid green"
        width="70%"
        margin="auto"
        marginTop="30px"
        borderRadius="20px"
        backgroundColor="#5BC2C2"
      >
        <Link to="/signup">Creat a NewAccount</Link>
      </Heading>
    </Box>
  );
}
