import { Box, Stack, Typography } from "@mui/material";
import SliderImage from "@/components/SliderImage";
import Slider2 from "../../../assests/photo-slider2.jpg";
import Slider3 from "../../../assests/photo-slider3.jpg";
import Slider4 from "../../../assests/photo-slider4.jpg";
import Slider5 from "../../../assests/photo-slider5.jpg";
import Slider6 from "../../../assests/photo-slider6.jpg";
import CardSignup from "@/components/CardSignup";

interface Iprops {}
function page({}: Iprops) {
  return (
    <>
      <Stack
        marginBlock={"50px"}
        direction={{ xs: "column", lg: "row" }}
        width={"100%"}
        sx={{
          overflow: "hidden",
          height: {
            md: "100vh",
          },
        }}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          sx={{
            width: "40%",
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <SliderImage images={[Slider2, Slider4, Slider5, Slider3, Slider6]} />
        </Box>
        <Box
          sx={{
            width: {
              xs: "90%",
              lg: "50%",
            },
            height: {
              md: "100vh",
            },
          }}
        >
          <CardSignup />
        </Box>
      </Stack>
    </>
  );
}

export default page;
