import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Tweets = lazy(() => import("../pages/Tweets/Tweets"));
const Home = lazy(() => import("../pages/Home/Home"));
const Layout = lazy(() => import("../pages/Layout/Layout"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};
