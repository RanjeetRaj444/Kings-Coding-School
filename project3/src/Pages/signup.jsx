import { Box, FormLabel, Input, Select } from "@chakra-ui/react";

export default function SignUp() {
  return (
    <Box width="50%" margin="auto" textAlign="center">
      <form action="">
        <FormLabel color="#964405">Name</FormLabel>
        <Input
          backgroundColor="#F4B400"
          color="white"
          type="text"
          placeholder="Name"
        />

        <FormLabel color="#964405">Profile Pic</FormLabel>
        <Input
          backgroundColor="#F4B400"
          color="white"
          type="text"
          placeholder="Insert a picture link of Drive"
        />
        <FormLabel color="#964405">Cover Pic</FormLabel>
        <Input
          backgroundColor="#F4B400"
          color="white"
          type="text"
          placeholder="Insert a picture link of Drive"
        />
        <FormLabel color="#964405">Address</FormLabel>
        <Input
          backgroundColor="#F4B400"
          color="white"
          type="text"
          placeholder="Enter your address"
        />
        <FormLabel color="#964405">Course</FormLabel>
        <Select backgroundColor="#F4B400">
          <option value="">Select Course</option>
          <option value="">Full Stack Devloper</option>
          <option value="">Font end Devloper</option>
          <option value="">Back end Devloper</option>
        </Select>
        <FormLabel color="#964405">Date of Birth</FormLabel>
        <Input
          backgroundColor="#EBA9AA"
          color="white"
          type="date"
          placeholder="Emter your date of birth"
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
