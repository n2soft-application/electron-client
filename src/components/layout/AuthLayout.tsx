import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../loading/Loading";

function AuthLayout() {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
}

export default AuthLayout;
