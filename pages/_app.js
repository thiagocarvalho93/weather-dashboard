import "../styles/globals.css";
import ResponsiveDrawer from "../components/Drawer";
import { AppWrapper, useAppContext } from "../context/dataContext";
import dataService from "../services/dataService";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const handleBuscarDados = async () => {
    const response = await dataService.getAll();
    console.log(response);
  };

  useEffect(() => {
    handleBuscarDados();
  });

  return (
    <AppWrapper>
      <ResponsiveDrawer>
        <Component {...pageProps} />
      </ResponsiveDrawer>
    </AppWrapper>
  );
}

export default MyApp;
