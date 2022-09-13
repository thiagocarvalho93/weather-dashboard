import "../styles/globals.css";
import ResponsiveDrawer from "../components/Drawer";
import { AppWrapper } from "../context/dataContext";
import { useEffect } from "react";
import observationService from "../services/observationService";

function MyApp({ Component, pageProps }) {
  const handleBuscarDados = async () => {
    const response = await observationService.getThreeDays("IMACA7");
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
