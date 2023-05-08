import { Box, Heading } from "@chakra-ui/react";
import LacrureFeed from "../components/lactureFeed";
import { useEffect, useState } from "react";

export default function Session() {
  const [data, setData] = useState([]);
  // console.log(data);
  function fetchData() {
    fetch("http://localhost:3000/post")
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
      {data.map(
        (ele) =>
          ele.section === "lecture" && <LacrureFeed key={ele.id} ele={ele} />
      )}
    </Box>
  );
}
