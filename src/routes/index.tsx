import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Layout from "../components/layout/Layout";
import Loading from "../components/loading/Loading";
import Popup from "../components/popup/Popup";

// Error pages
const Error404 = lazy(() => import("../pages/error/Error404"));

const Login = lazy(() => import("../pages/example/login/Login"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate replace={true} to="/404" />} />
      </Route>
      <Route path="/main/*" element={<Layout />}></Route>
      <Route path="*" element={<Navigate replace={true} to="/404" />} />
      <Route path="popup" element={<Popup />} />
      <Route
        path="/404"
        element={
          <Suspense fallback={<Loading />}>
            <Error404 />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
