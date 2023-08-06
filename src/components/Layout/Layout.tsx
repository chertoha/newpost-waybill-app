import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Container from "components/Container";
import Header from "components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </div>
  );
};
export default Layout;
