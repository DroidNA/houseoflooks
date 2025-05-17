import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between p-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
