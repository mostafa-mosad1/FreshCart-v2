"use client";

import { useEffect, useState } from "react";
import slider1 from "../assests/slider-image-1.jpeg";
import slider2 from "../assests/slider-image-2.jpeg";
import slider3 from "../assests/slider-image-3.jpeg";
import slider4 from "../assests/grocery-banner.png";
import slider5 from "../assests/grocery-banner-2.jpeg";
import Slider from "react-slick";
import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import Image from "next/image";

const MinSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Stack direction={"row"} gap={1} >
        <Box sx={{ width: {xs:"100%",md:"75%"},height:"100%" }}>
          <Slider {...settings}>
            <Box>
              <Image
                src={slider1}
                alt="slider"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Image
                src={slider2}
                alt="slider"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Image
                src={slider3}
                alt="slider"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </Box>
          </Slider>
        </Box>
        <Stack sx={{ width: "25%",display:{xs:"none",md:"block"} }} spacing={2}>
          <Box sx={{ height: 200, overflow: "hidden", borderRadius: 2 }}>
            <Image
              src={slider4}
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
          <Box sx={{ height: 200, overflow: "hidden", borderRadius: 2 }}>
            <Image
              src={slider5}
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default MinSlider;
