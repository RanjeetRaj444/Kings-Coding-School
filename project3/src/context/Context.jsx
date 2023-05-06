import { createContext } from "react";

export let AppContext = createContext();
export default function Context({ children }) {
  console.log("Context");
  const name = "Ranjeet";
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
}
