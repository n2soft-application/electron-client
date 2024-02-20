import { FcGoogle } from "react-icons/fc";
import Checkbox from "../../components/checkbox";
import InputField from "../../components/fields/InputField";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center overflow-hidden h-full min-h-screen !bg-white dark:!bg-navy-900">
      {/* left-column */}
      <div className="relative flex-1">
        {/* Sign in section */}
        <div className="flex-col items-center w-full p-10">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign In
          </h4>
          <p className="ml-1 text-base text-gray-600 mb-9">
            Enter your email and password to sign in!
          </p>
          <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
            <div className="text-xl rounded-full">
              <FcGoogle />
            </div>
            <h5 className="text-sm font-medium text-navy-700 dark:text-white">
              Sign In with Google
            </h5>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
            <p className="text-base text-gray-600 dark:text-white"> or </p>
            <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
          </div>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
          />
          {/* Checkbox */}
          <div className="flex items-center justify-between px-2 mb-4">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                Keep me logged In
              </p>
            </div>
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>
          <button
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => {
              navigate("/");
            }}
          >
            Sign In
          </button>
          <div className="mt-4">
            <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            <a
              href=" "
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
      {/* right-column */}
      <div className="relative flex-1 hidden min-h-screen lg:block">
        <div className="absolute flex items-center justify-center w-full h-full">
          <img
            src={require("../../assets/img/auth/logo.png")}
            alt=""
            className="w-80"
          />
        </div>
      </div>
    </div>
  );
}
