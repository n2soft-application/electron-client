import { motion } from "framer-motion";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Breadcrumbs from "../\bbreadcrumbs/Breadcrumbs";
import Loading from "../loading/Loading";
import Sidebar from "../sidebar/Sidebar";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full">
      <Header />
      <Sidebar />

      <main>
        <Suspense fallback={<Loading />}>
          <motion.div
            key={location.pathname}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
                y: 50,
              },
              pageAnimate: {
                opacity: 1,
                y: 0,
              },
              pageExit: {
                opacity: 0,
                y: -50,
              },
            }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <Breadcrumbs />
            {<Outlet />}
          </motion.div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
