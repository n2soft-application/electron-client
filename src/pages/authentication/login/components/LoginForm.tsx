import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserService } from "../../../../api/services/userService";
import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
import TextInput from "../../../../components/form/TextInput";
import { storageKey } from "../../../../constants/constants";
import useLoading from "../../../../hooks/useLoading";
import { userState } from "../../../../state/user/userAtom";

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showLoading, hideLoading } = useLoading();
  const setUserState = useSetRecoilState(userState);
  const [checked, setChecked] = useState(false);

  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = async (data: any) => {
    try {
      showLoading();
      const response = await UserService.login({
        username: data.username,
        password: data.password,
      });
      hideLoading();

      if(response.status === 'OK') {
        localStorage.setItem(storageKey.user, JSON.stringify(response.data));
        setUserState(response.data);

        const { from } = location.state || { from: { pathname: "/home/dashboard" } };
        navigate(from);
      }

    } catch (error) {
      hideLoading();
      setError("fail", {
        type: "custom",
        message: "아이디 또는 비밀번호가 올바르지 않아요.",
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="username"
        label="아이디"
        defaultValue="nTree"
        type="text"
        register={register}
        error={errors.email}
        className="h-[48px]"
      />
      <TextInput
        name="password"
        label="비밀번호"
        type="password"
        defaultValue="1"
        register={register}
        error={errors.password}
        className="h-[48px]"
      />

      <div className="flex justify-between">
        <Checkbox
          id="loginCheckbox"
          value={checked}
          onChange={() => setChecked(!checked)}
          label="아이디 저장"
        />
        <Link
          to="#"
          className="text-sm font-medium leading-6 text-slate-800 dark:text-slate-400"
        >
          로그인 정보를 잊으셨나요?
        </Link>
      </div>

      <Button
        type="submit"
        text="로그인"
        className="block w-full text-center btn btn-dark"
      />
    </form>
  );
}

export default LoginForm;
