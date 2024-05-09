// import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../state/user/userAtom";

function PrivateRoute() {
  const isAuthenticated = useRecoilValue(userSelector);
  const location = useLocation();


  return true ? (
    <Outlet />
  ) : (
    <Navigate
      to={`${process.env.PUBLIC_URL}`}
      replace={true}
      state={{
        from: location,
      }}
    />
  );
}

export default PrivateRoute;
