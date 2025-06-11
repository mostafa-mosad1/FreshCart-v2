import { Box, Stack } from "@mui/material";
import CardLogin from "@/components/CardLogin";
import SliderImage from "@/components/SliderImage";
import Slider2 from "../../../assests/photo-slider2.jpg";
import Slider3 from "../../../assests/photo-slider3.jpg";
import Slider4 from "../../../assests/photo-slider4.jpg";
import Slider5 from "../../../assests/photo-slider5.jpg";
import Slider6 from "../../../assests/photo-slider6.jpg";

interface Iprops {}
function page({}: Iprops) {
  return (
    <>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        width={"100%"}
        height={"100vh"}
        sx={{ overflow: "hidden" }}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box sx={{ width: {
              xs: "90%",
              lg: "50%",
            } }}>
          <CardLogin />
        </Box>
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
      </Stack>
    </>
  );
}

export default page;
