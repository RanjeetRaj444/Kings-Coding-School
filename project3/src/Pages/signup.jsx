import { Box, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
let obj = {
  name: "",
  email: "",
  password: "",
  course: "",
  image: "",
  coverpic: "",
  DateOfBirth: "",
  address: "",
};
export default function SignUp() {
  const [data, setData] = useState(obj);
  let navigate = useNavigate();
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function addData(e) {
    e.preventDefault();
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/students");
      });
    e.target.reset();
  }
  return (
    <Box textAlign="center">
      <Heading color="Red">Welcome to our School</Heading>
      <Box width="50%" margin="auto" textAlign="center">
        <form onSubmit={addData} action="">
          <FormLabel color="#964405">Name</FormLabel>
          <Input
            backgroundColor="#F4B400"
            color="white"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
          />
          <FormLabel color="#964405">Email</FormLabel>
          <Input
            backgroundColor="#9150C7"
            color="white"
            type="email"
            placeholder="Name"
            onChange={handleChange}
            name="email"
          />

          <FormLabel color="#505DC7">Profile Pic</FormLabel>
          <Input
            backgroundColor="#505DC7"
            color="black"
            type="text"
            placeholder="Insert a picture link of Drive"
            onChange={handleChange}
            name="image"
          />
          <FormLabel color="#964405">Cover Pic</FormLabel>
          <Input
            backgroundColor="#C750BD"
            color="white"
            type="text"
            placeholder="Insert a picture link of Drive"
            onChange={handleChange}
            name="coverpic"
          />
          <FormLabel color="#964405">Address</FormLabel>
          <Input
            backgroundColor="#75C750"
            color="white"
            type="text"
            placeholder="Enter your address"
            onChange={handleChange}
            name="address"
          />
          <FormLabel color="#964405">Course</FormLabel>
          <Select
            name="course"
            onChange={handleChange}
            backgroundColor="#C75050"
          >
            <option value="">Select Course</option>
            <option value="Full Stack Devloper">Full Stack Devloper</option>
            <option value="Font end Devloper">Font end Devloper</option>
            <option value="Back end Devloper">Back end Devloper</option>
          </Select>
          <FormLabel color="#964405">Date of Birth</FormLabel>
          <Input
            backgroundColor="#EBA9AA"
            color="white"
            type="date"
            placeholder="Emter your date of birth"
            onChange={handleChange}
            name="DateOfBirth"
          />
          <FormLabel color="#964405">New Password</FormLabel>
          <Input
            backgroundColor="#5093C7"
            color="white"
            type="password"
            placeholder="Emter your new password"
          />
          <FormLabel color="#964405">Confirm Password</FormLabel>
          <Input
            backgroundColor="#5093C7"
            color="white"
            type="password"
            placeholder="Confirm your new password"
            onChange={handleChange}
            name="password"
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
    </Box>
  );
}
