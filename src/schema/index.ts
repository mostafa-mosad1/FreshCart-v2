import { yupResolver } from "@hookform/resolvers/yup";
import { Email } from "@mui/icons-material";
import * as yup from "yup";

export const schemaLogin = yup
  .object({
    email: yup.string().required().email(),
    password: yup
      .string()
      .min(4, "less then 4 character")
      .max(10, "large then 10 character")
      .required(),
  })
  .required();
export const schemaSignup = yup
  .object({
    email: yup.string().required().email(),
    name: yup
      .string()
      .min(4, "less then 4 character")
      .max(10, "large then 10 character")
      .required(),
      phone: yup.string().required("01*********"),
    password: yup
      .string()
      .min(4, "less then 4 character")
      .max(10, "large then 10 character")
      .required(),

      rePassword: yup
      .string()
      .min(4, "less then 4 character")
      .max(10, "large then 10 character")
      .required(),
  })
  .required();
