import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin1" element={<Home />} />
        <Route path="/admin2" element={<Home />} />
        <Route path="/admin3" element={<Home />} />
        <Route path="/admin4" element={<Home />} />
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
