import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Tweets = lazy(() => import("../pages/Tweets/Tweets"));
const Home = lazy(() => import("../pages/Home/Home"));
// const Layout = lazy(() => import("../pages/Layout/Layout"));
// import Tweets from "../pages/Tweets/Tweets";
// import Home from "../pages/Home/Home";
import Layout from "../pages/Layout/Layout";

export const App = () => {
  console.log(import.meta.env);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
