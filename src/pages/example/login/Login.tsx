import { Link } from "react-router-dom";
import useDarkMode from "../../../hooks/layout/useDarkMode";

import Illustration from "../../../assets/images/auth/ils1.svg";
import LogoWhite from "../../../assets/images/logo/logo-white.png";
import Logo from "../../../assets/images/logo/logo.png";
import Social from "./components/Social";

function Login() {
  const [isDark] = useDarkMode();

  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        <div className="left-column relative z-[1]">
          <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
            {/* <Link to="/">
              <img src={isDark ? LogoWhite : Logo} alt="" className="mb-10" />
            </Link> */}
            <Link to="/home/dashboard">
              <div className="flex items-center space-x-4">
                <div className="logo-icon">
                  {!isDark ? (
                    <img className="border rounded shadow" src={Logo} alt="" />
                  ) : (
                    <img
                      className="border rounded shadow"
                      src={LogoWhite}
                      alt=""
                    />
                  )}
                </div>

                <div>
                  <h1 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  리테일 금융 시스템
                  </h1>
                </div>
              </div>
            </Link>
            <h4>
              Unlock your Project
              <span className="font-bold text-slate-800 dark:text-slate-400">
                performance
              </span>
            </h4>
          </div>
          <div className="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
            <img
              src={Illustration}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="relative right-column">
          <div className="flex flex-col h-full bg-white inner-content dark:bg-slate-800">
            <div className="flex flex-col justify-center h-full auth-box">
              <div className="block mb-6 text-center mobile-logo lg:hidden">
                <Link to="/">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="logo-icon">
                      {!isDark ? (
                        <img
                          className="border rounded shadow"
                          src={Logo}
                          alt=""
                        />
                      ) : (
                        <img
                          className="border rounded shadow"
                          src={LogoWhite}
                          alt=""
                        />
                      )}
                    </div>

                    <div>
                      <h1 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      리테일 금융 시스템
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="mb-4 text-center 2xl:mb-10">
                <h4 className="font-medium">Sign in</h4>
                <div className="text-base text-slate-500">
                  Sign in to your account to start using 리테일 금융 시스템
                </div>
              </div>
              {/* <LoginForm /> */}
              <div className="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                <div className="absolute inline-block px-4 text-sm font-normal transform -translate-x-1/2 bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 min-w-max text-slate-500">
                  Or continue with
                </div>
              </div>
              <div className="max-w-[242px] mx-auto mt-8 w-full">
                <Social />
              </div>
              <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-slate-900 dark:text-white hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </div>
            <div className="text-center auth-footer">
              Copyright 2024, 리테일 금융 시스템 All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
