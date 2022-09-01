import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState('');

  return <AppContext.Provider value={(data, setData)}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
