import { Outlet } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

const Layout = () => {
  return (
    <div className="interface">
      <Nav />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
