"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputSignup } from "../interface";
import { signupFormData } from "../data";
import { Box, Stack, Button } from "@mui/material";
import { schemaSignup } from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "./InputError";
import { useSignupMutation } from "@/Redux/features/AuthApi/AuthApi";
import toast from "react-hot-toast";
import LoaderButton from "./Loader";
import { useRouter } from "next/navigation";

function FormSignup() {
  const router = useRouter();
  const [SignUpFunction, { isLoading, data: ResponseData, error }] =
    useSignupMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputSignup>({
    resolver: yupResolver(schemaSignup),
  });
  const onSubmit: SubmitHandler<IFormInputSignup> = async (data) => {

     try {
          const res: any = await SignUpFunction(data);
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
            // location.replace("/");
            router.push("/signin")
          }
        } catch (error) {
          console.error(error);
        }


   
  };

  const inputs = signupFormData.map((input, index) => (
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
         {isLoading?<LoaderButton/>:"Sign Up"} 
        </Button>
      </Stack>
    </form>
  );
}

export default FormSignup;
