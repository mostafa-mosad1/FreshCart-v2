import { IFormInputLoginkey, IFormInputsignupkey } from "../interface";

export const loginFormData: IFormInputLoginkey[] = [
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your Email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    placeholder: "***",
  },
];
export const signupFormData: IFormInputsignupkey[] = [
  {
    id: "name",
    name: "fullname",
    label: "Full Name",
    placeholder: "Enter your Full Name",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your Email",
  },
  {
    id: "password",
    name: "password",
    label: "Password",
    placeholder: "***",
  },
  {
    id: "rePassword",
    name: "conformPassword",
    label: "Conform Password",
    placeholder: "Enter your Conform Password",
  },
  {
    id:"phone",
    name: "phone",
    label: "Phone",
    placeholder: "Enter your Conform Password",
  }
];
