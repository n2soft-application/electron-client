import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
import STextinput from "../../../../components/form/STextInput";

function LoginForm() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = async (data: any) => {
    navigate("/home/dashboard");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <STextinput
        name="email"
        label="email"
        defaultValue="email@gmail.com"
        type="email"
        register={register}
        error={errors.email}
        className="h-[48px]"
      />
      <STextinput
        name="password"
        label="passwrod"
        type="password"
        defaultValue="password"
        register={register}
        error={errors.password}
        className="h-[48px]"
      />

      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
        <Link
          to="/forgot-password"
          className="text-sm font-medium leading-6 text-slate-800 dark:text-slate-400"
        >
          Forgot Password?{" "}
        </Link>
      </div>

      <Button
        type="submit"
        text="로그인"
        className="block w-full text-center btn btn-dark "
      />
    </form>
  );
}

export default LoginForm;
