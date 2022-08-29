import Link from "next/link";
import "../styles/globals.css";
import ResponsiveDrawer from "../components/Drawer";

const drawerWidth = 240;

function MyApp({ Component, pageProps }) {
  return (
    <ResponsiveDrawer>
      <Component {...pageProps} />
    </ResponsiveDrawer>
  );
}

export default MyApp;
