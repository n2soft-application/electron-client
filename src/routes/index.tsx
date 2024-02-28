import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import Layout from "../components/layout/Layout";
import Loading from "../components/loading/Loading";

// Pages
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const CommonCodePage = lazy(() => import("../pages/preferences/code/common/CommonCodePage"));


// Error pages
const Error404 = lazy(() => import("../pages/error/Error404"));

// Example Pages
const IconsPage = lazy(() => import("../pages/example/icon/IconsPage"));
const ChatPage = lazy(() => import("../pages/example/chat/ChatPage"));
const ChangeLog = lazy(() => import("../pages/example/changelog/ChangeLog"));
const Login = lazy(() => import("../pages/example/login/Login"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/*" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="code/common" element={<CommonCodePage />} />


        {/* Example */}
        <Route path="icons" element={<IconsPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="changelog" element={<ChangeLog />} />

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
