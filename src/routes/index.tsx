import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import AuthLayout from "../components/layout/AuthLayout";
import Loading from "../components/loading/Loading";
import PrivateRoute from "./PrivateRoute";

// Pages
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Login = lazy(() => import("../pages/auth/Login"));

// Error pages
const Error404 = lazy(() => import("../pages/error/Error404"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route path="/*" element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/404" />} />
      </Route>
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
