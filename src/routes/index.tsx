import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import PrivateRoute from "./PrivateRoute";

// Pages
const Home = lazy(() => import("../pages/home/Home"));
const SignIn = lazy(() => import("../pages/auth/SignIn"));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>
      </Route>
      <Route path="/404" element={<>404</>} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default AppRouter;
