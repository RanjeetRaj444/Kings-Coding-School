import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/Context";
export default function Private({children}) {
  let obj=useContext(AppContext);

  // let suth = false;
  if (!obj.status) {
    return <Navigate to="/login" />;
  }
  return children;
}
