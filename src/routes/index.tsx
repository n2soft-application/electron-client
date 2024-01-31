import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "./layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};


export default AppRouter;