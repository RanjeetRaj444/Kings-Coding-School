import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let obj = {
  name: "",
  image: "",
  comments: "",
  title: "",
  section:"feed",
  rating:3.5

};
export default function Card() {
  const [data, setData] = useState(obj);
  const navigate=useNavigate()
  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  function post(e) {
    e.preventDefault();
    fetch("http://localhost:3000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/")
      });
  }
  return (
    <Box width="50%" margin="auto" textAlign="center">
      <form onSubmit={post}>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <Input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter Poster Link"
        />
        <Input
          onChange={handleChange}
          type="text"
          name="comments"
          placeholder="Write description"
        />
        <Input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Enter title of Post "
        />
        <Input width="50%" type="submit" value="add" />
      </form>
    </Box>
  );
}
