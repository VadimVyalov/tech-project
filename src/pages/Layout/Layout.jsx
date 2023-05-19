//import Loader from 'components/Loader';
import Loader from "../../components/Loader/Loader";
import {
  Container,
  Header,
  MenuLink,
} from "../../components/SharedLayout/SharedLayout";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <Container>
      <Header>
        <MenuLink to="/" end>
          Home
        </MenuLink>
        <MenuLink to="/tweets">Tweets</MenuLink>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </Container>
  );
};

export default Layout;
