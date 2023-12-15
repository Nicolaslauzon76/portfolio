import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const Layout = () => {
  return (
    <div className="interface">
      {/* <Nav /> */}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
