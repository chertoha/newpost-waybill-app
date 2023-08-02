import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#dbaca9" }}>
      <Header />
      <main style={{ backgroundColor: "#b3e394" }}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
