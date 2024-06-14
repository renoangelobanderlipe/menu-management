import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { loginSchema } from '@utils/validations';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) });


  return (
    <div className="bg-light-main-bg dark:bg-dark-main-bg lg:flex-row flex flex-col h-screen overflow-hidden">
      <div className="relative hidden h-screen dark:bg-dark-container lg:block xl:w-[70%]">
        <div className="flex h-screen w-full items-center justify-center py-[63px]">
          <img
            loading="lazy"
            decoding="async"
            src={"assets/images/light-mode-sign-in.png"}
            className="w-[65%] dark:hidden"
            alt="image"
          />
          <img
            loading="lazy"
            decoding="async"
            src={"assets/images/dark-mode-sign-in.png"}
            className="hidden w-[65%] dark:block"
            alt="image"
          />
        </div>
      </div>
      <div className="flex h-screen flex-col items-center lg:w-[30%]">
        <form
          className="flex h-full w-full max-w-[288px] flex-col justify-center gap-[20px]"
        >
          <div className="lg:gap-14 flex flex-col items-center gap-12">
            <div className="flex items-center gap-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAMAAAAqGX2oAAAALVBMVEVHcEwhqpgkrpwlrpwkrZskrZslrpwirJojrZokrZwkrJsjrZsjrJskrZslrpxdfTXbAAAADnRSTlMAD832knvmQTGvU2oeoJGwNoYAAACwSURBVCiRhZJXAsMgDEMNNsMM3/+4haQNEEb1q4fARgCPlA+GraboEiykjEb5ynKYbJJRekSclkmkmh9nu4aks9+IsPELcd2i7BYQqkDe+yIOwB8CRHj/wlvogY+ARFisqJcGcwYseDwCZdD3N40qcwLtM9Bcu/Ym03Ib6NqHhlWM7avluYZYNh1JY6mSC7WNbW5WsFQlsJTXre2b0Gpz+qnY0a8ZU+/fGfkPAOF3xwfbyhvZ7eAPbAAAAABJRU5ErkJggg=="
                alt="logo"
                loading="lazy"
                decoding="async"
                className="h-16"
              />
              <Typography variant="h3" color="black">
                UTAK PH
              </Typography>
            </div>
            <div className="flex flex-col w-full gap-4">
              <Typography variant="h3" color="black">
                Sign In To the App
              </Typography>
              <div className="flex gap-1">
                <Typography variant="paragraph" color="gray">
                  New User?
                </Typography>
                <NavLink className="text-[14px]">
                  <Typography variant="paragraph" color="green">
                    Create an account
                  </Typography>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Input
                  {...register("email")}
                  type="text"
                  placeholder="Email"
                  size="lg"
                  containerProps={{ className: "w-full" }}
                  error={errors.email}
                />
                {errors.email && (
                  <Typography variant="small" color="red">
                    {errors.email.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  size="lg"
                  containerProps={{ className: "w-full" }}
                  icon={
                    <IconButton
                      className="h-5 w-5 p-0 hover:!bg-transparent focus:!bg-transparent lg:h-6 lg:w-6"
                      variant="text"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon
                          icon="ph:eye-duotone"
                          className="text-primary-500 lg:h-6 lg:w-6 w-5 h-5"
                        />
                      ) : (
                        <Icon
                          icon="ph:eye-closed-duotone"
                          className="text-primary-500 lg:h-6 lg:w-6 w-5 h-5"
                        />
                      )}
                    </IconButton>
                  }
                  error={errors.password}
                />
                {errors.password && (
                  <Typography variant="small" color="red">
                    {errors.password.message}
                  </Typography>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <label></label>
              <NavLink className="leading-5">
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="hover:text-primary-500"
                >
                  Forgot Password?
                </Typography>
              </NavLink>
            </div>
          </div>
          <Button fullWidth type="submit" disabled={isSubmitting} size="lg">
            {isSubmitting ? (
              <Icon
                icon="svg-spinners:6-dots-scale"
                style={{ color: "#fff" }}
              />
            ) : (
              "Log in"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
