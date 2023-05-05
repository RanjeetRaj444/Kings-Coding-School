import { Box, FormLabel, Input } from "@chakra-ui/react";

export default function SignUp() {
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
          value="Sign Up"
        />
      </form>
    </Box>
  );
}
