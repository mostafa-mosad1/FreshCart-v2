"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputLogin } from "../interface";
import { loginFormData } from "../data";
import { Stack, Button } from "@mui/material";
import { schemaLogin } from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "./InputError";
import { useSigninMutation } from "@/Redux/features/AuthApi/AuthApi";
import LoaderButton from "./Loader";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function FormLogin() {
  const router = useRouter();
  const [SignInFunction, { isLoading, data: ResponseData, error }] =
    useSigninMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputLogin>({
    resolver: yupResolver(schemaLogin),
  });
  const onSubmit: SubmitHandler<IFormInputLogin> = async (data) => {
    try {
      const res: any = await SignInFunction(data);
      if (res.error) {
        toast.error(`${res.error.data.message}`, {
          position: "top-center",
          duration: 1500,
        });
      }
      if (res.data) {
        toast.success(`${res.data.message}`, {
          position: "top-center",
          duration: 1500,
        });
        localStorage.setItem("token", res.data.token);
        console.log(res);
        location.replace("/");
        // router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const inputs = loginFormData.map((input, index) => (
    <Stack spacing={0} direction={"column"} sx={{ margin: "10px" }} key={index}>
      <label htmlFor={`${input.name}`}>{input.label}</label>
      <br />
      <input
        style={{ padding: "10px" }}
        id={`${input.name}`}
        placeholder={input.placeholder}
        {...register(`${input.id}`)}
      />
      {errors[input.id] && <InputError msg={errors[input.id]?.message} />}
    </Stack>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs}
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Button
          loading={isLoading}
          sx={{ background: "black", color: "white", width: "95%" }}
          variant="text"
          type="submit"
        >
          {isLoading ? <LoaderButton /> : "Login"}
        </Button>
      </Stack>
    </form>
  );
}

export default FormLogin;
