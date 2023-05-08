import { Box, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import "./Login.css";
// import RouteLinks from "../Routs/Routs";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";
let obj = {
  email: "",
  password: "",
};
export default function Login() {
  let fun = useContext(AppContext);
  const [data, setData] = useState(obj);
  const [state, setState] = useState(false);
  let navigate = useNavigate();
  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  function addData(e) {
    e.preventDefault();
    fetch("http://localhost:3000/students", {})
      .then((res) => res.json())
      .then((data1) => {
        data1.map((ele) => {
          if (ele.email === data.email && ele.password === data.password) {
            fun.setStatus(true);
            setState(false);
            fun.setData(ele);
            navigate("/");
          } else {
            setState(true);
          }
        });
      })
      .catch((err) => {});
    e.target.reset();
  }
  return (
    <Box textAlign="center">
      <Heading color="red">Welcome back</Heading>
      <Box width="50%" margin="auto" textAlign="center">
        <form onSubmit={addData} action="">
          <FormLabel color="#964405">Email</FormLabel>
          <Input
            className="name"
            backgroundColor="#f4b60b"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <FormLabel color="#5C3A1F">Password</FormLabel>
          <Input
            className="password"
            backgroundColor="#073d3d"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Input
            backgroundColor="#4285f4"
            width="30%"
            margin="auto"
            className="submit"
            type="submit"
            value="Login"
          />
        </form>
        {state && <Heading color="red">Invalid Email or Password</Heading>}
        <Heading className="account">
          <Link to="/signup">Creat a NewAccount</Link>
        </Heading>
      </Box>
    </Box>
  );
}
