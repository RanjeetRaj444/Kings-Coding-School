import { Box } from "@chakra-ui/react";
// import Routes from './Routs';
import { Route, Routes } from "react-router-dom";
import Feed from "./../Pages/Feed";
import Session from "./../Pages/Session";
import Message from "./../Pages/Message";
import University from "../Pages/MyNetwork/University";
import Mentor from "../Pages/MyNetwork/Mentors";
import School from "../Pages/MyNetwork/School";
import Companies from "../Pages/MyNetwork/Companies";
import Login from "../Pages/Login";
import Private from "../PrivateRoutes/PrivateRoutes";
import Students from "../Pages/MyNetwork/Students";
import SignUp from "../Pages/signup";
import Card from "../components/creatNewPost";

export default function RouteLinks() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/live"
          element={
            <Private>
              <Session />
            </Private>
          }
        />
        <Route path="/message" element={<Message />} />
        <Route path="/school" element={<School />} />
        <Route
          path="/mentors"
          element={
            <Private>
              <Mentor />
            </Private>
          }
        />
        <Route
          path="/students"
          element={
            <Private>
              <Students />
            </Private>
          }
        />
        <Route path="/university" element={<University />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/creatPost" element={<Card />} />
        {/* <Route path="/https://www.youtube.com/watch?v=mBrdvtgc7q0&ab_channel=AbhiOfficialLofi" element={} /> */}
      </Routes>
    </Box>
  );
}
