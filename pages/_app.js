import "../styles/globals.css";
import ResponsiveDrawer from "../components/Drawer";

function MyApp({ Component, pageProps }) {
  return (
    <ResponsiveDrawer>
      <Component {...pageProps} />
    </ResponsiveDrawer>
  );
}

export default MyApp;
