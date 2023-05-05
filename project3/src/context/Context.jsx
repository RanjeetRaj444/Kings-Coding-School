import { createContext, useState } from "react";

export let AppContext = createContext();
export default function Context({ children }) {
  const [state, setState] = useState([]);
  console.log("Context");
  const name = "Ranjeet";
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
}
