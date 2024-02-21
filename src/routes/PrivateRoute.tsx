// import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userSelector } from "../states/selectors/userSelector";

function PrivateRoute() {
  //   const isAuthenticated = useRecoilValue(userSelector);
  const location = useLocation();

  return true ? (
    <Outlet />
  ) : (
    <Navigate
      // to={`${process.env.PUBLIC_URL}/login`}
      to={`/`}
      replace={true}
      state={{
        from: location,
      }}
    />
  );
}

export default PrivateRoute;
