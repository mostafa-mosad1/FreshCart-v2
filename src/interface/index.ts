export interface IFormInputLogin {
  email: string;
  password: string;
}

export interface IFormInputLoginkey {
  id: keyof IFormInputLogin;
  name: string;
  label: string;
  placeholder: string;
}
export interface IFormInputSignup {
  name: string;
  email: string;
  phone: string;
  password: string;
  rePassword: string;
}

export interface IFormInputsignupkey {
  id: keyof IFormInputSignup;
  name: string;
  label: string;
  placeholder: string;
}
