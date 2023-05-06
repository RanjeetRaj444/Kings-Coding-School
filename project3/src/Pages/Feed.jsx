import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { AppContext } from "../context/Context";
import LacrureFeed from "../components/lactureFeed";
import MessFeed from "../components/messFeed";

export default function Feed() {
  // const obj = useContext(AppContext);
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
  // console.log(obj);
  return (
    //import container here with the details of feed means post of students including Teacher.
    <Box>
      {data.map((ele) =>
        ele.section === "lecture" ? (
          <LacrureFeed key={ele.id} ele={ele} />
        ) : (
          <MessFeed key={ele.id} ele={ele} />
        )
      )}
    </Box>
  );
}
