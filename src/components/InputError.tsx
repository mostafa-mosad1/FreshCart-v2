import { Typography } from "@mui/material";

interface IProps {
    msg?: string;
  }
  function InputError({ msg }: IProps) {
    return (
      <Typography  sx={{color:"red"}}>
        {msg}
      </Typography>
    );
  }
  
  export default InputError;
  