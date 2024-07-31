import Footer from "./Components/Landing/Footer";
import Header from "./Components/Landing/Header";
import { Outlet } from "react-router-dom";

function Layout () {
  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
}

export default Layout;
