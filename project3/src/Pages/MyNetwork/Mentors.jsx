import { Box, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MentorsDetail from "../../components/details";
import "./Mentors.css"
export default function Mentor() {
  const [data, setData] = useState([]);
  // console.log(data);
  function fetchData() {
    fetch("https://json-server-is-live.onrender.com/Mentors")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }
  function filterData(e) {
    let url;
    if (e.target.value === "") {
      url = "https://json-server-is-live.onrender.com/Mentors";
    } else {
      url = `https://json-server-is-live.onrender.com/Mentors?role=${e.target.value}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      <Box>
        <Box className="mentors-detail">
          <Select onChange={filterData}>
            <option value="">Filter By Role</option>
            <option value="Coding Instructor">Coding Instructor</option>
            <option value="Coding Ia">Coding Ia</option>
            <option value="DSA Instructor">DSA Instructor</option>
            <option value="DSA Ia">DSA Ia</option>
            <option value="CSBT Instructor">CSBT Instructor</option>
          </Select>
        </Box>
      </Box>
      <Box>
        {data.map((ele) => (
          <MentorsDetail ele={ele} />
        ))}
      </Box>
    </Box>
  );
}
