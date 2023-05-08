import { createContext, useState } from "react";

export let AppContext = createContext();
export default function Context({ children }) {
  // console.log("Context");
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  // const name = "Ranjeet";
  return (
    <AppContext.Provider value={{ status, setStatus, data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
