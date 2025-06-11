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
import FormLogin from "./FormLogin";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

interface Iprops {}
function CardLogin({}: Iprops) {
  return (
    <>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          sx={{ textAlign: "center" }}
          title="Login to FreshCart"
          subheader="Enter your credentials to access your account"
        />

        <CardContent>
          <FormLogin />
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
            <Link style={{color:"black"}} href="/">
              Forgot password?
            </Link>
            <Typography sx={{ color: "gray" }} variant="body1" color="initial">
              Don't have an account?
              <Link style={{color:"black"}} href="/signup">
                Sign up
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default CardLogin;
