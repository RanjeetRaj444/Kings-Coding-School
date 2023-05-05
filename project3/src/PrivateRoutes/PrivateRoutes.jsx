import { Navigate } from "react-router-dom";
export default function Private({children}) {
  let suth = false;
  if (!suth) {
    return <Navigate to="/login" />;
  }
  return children;
}
