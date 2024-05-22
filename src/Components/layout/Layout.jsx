import { Outlet } from "react-router-dom";
import "../../assets/css/layout.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>

          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-10 px-md-4 content"
          >
            <Header></Header>
            <div className="content">
              <Outlet></Outlet>
            </div>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
