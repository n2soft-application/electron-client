import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/layout";
import TestPage1 from "../pages/test/TestPage1";
import TestPage2 from "../pages/test/TestPage2";
import TestPage3 from "../pages/test/TestPage3";
import TestPage4 from "../pages/test/TestPage4";
import SignIn from "../pages/auth/SignIn";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/admin1" element={<TestPage1 />} />
          <Route path="/admin2" element={<TestPage2 />} />
          <Route path="/admin3" element={<TestPage3 />} />
          <Route path="/admin4" element={<TestPage4 />} />
        </Route>
      </Route>
      <Route path="*" element={<>404</>} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};

export default AppRouter;
