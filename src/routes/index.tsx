import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Layout from "../components/layout/Layout";
import Loading from "../components/loading/Loading";

// Pages
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Login = lazy(() => import("../pages/auth/Login"));
const ChangeLog = lazy(() => import("../pages/changelog/ChangeLog"));

// Error pages
const Error404 = lazy(() => import("../pages/error/Error404"));

// Example Pages
const IconsPage = lazy(() => import("../pages/example/icon/IconsPage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/*" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="changelog" element={<ChangeLog />} />

        {/* Example */}
        <Route path="icons" element={<IconsPage />} />

        <Route path="*" element={<Navigate replace={true} to="/404" />} />
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
