import Container from "components/Container";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};
export default Layout;
