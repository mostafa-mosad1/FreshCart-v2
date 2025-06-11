import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Stack,
    Typography,
  } from "@mui/material";
  import GitHubIcon from "@mui/icons-material/GitHub";
  import GoogleIcon from "@mui/icons-material/Google";
import FormSignup from "./FormSignup";
import Link from "next/link";
  
  interface Iprops {}
  function CardSignup({}: Iprops) {
    return (
      <>
        <Card sx={{ width: "100%" }}>
          <CardHeader
            sx={{ textAlign: "center" }}
            title="Sign up for Freshcart"
            subheader="our one-stop shop for home appliances and smart devices"
          />
  
          <CardContent>
            <FormSignup />
            <Divider sx={{ marginBlock: "10px" }}>Or continue with</Divider>
            <Stack
              marginBlock={"20px"}
              spacing={"30px"}
              direction={{ sx: "column", md: "row" }}
              justifyContent={"space-around"}
            >
              <Button
                sx={{
                  background: "white",
                  color: "white",
                  width: "100%",
                  marginBlock: "10px",
                  backgroundColor:"red",
                }}
                variant="contained"
              >
                <GoogleIcon sx={{ paddingRight: "5px" }} />
                Google
              </Button>
              <Button
                sx={{
                  background: "white",
                  color: "white",
                  width: "100%",
                  marginBlock: "10px",
                  backgroundColor:"black"

                }}
                variant="contained"
              >
                <GitHubIcon sx={{ paddingRight: "5px" }} />
                GitHub
              </Button>
            </Stack>
            <Box
              sx={{ textAlign: "center", marginBlock: "20px", lineHeight: "2" }}
            >
              {/* <Link sx={{ color: "black" }} href="#" underline="hover">
                Forgot password?
              </Link> */}
              <Typography sx={{ color: "gray" }} variant="body1" color="initial">
              Already have an account? 
                <Link  href="/signin" style={{color:"black"}}>
                Sign in
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </>
    );
  }
  
  export default CardSignup;
  