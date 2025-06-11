"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Slider from "react-slick";

interface Iprops {
  images: StaticImageData[];
}

export default function SliderImage({ images }: Iprops) {
  var settings = {
    dots: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    infinite: true,
    speed: 500,
  };
  const imagesSlider = images.map((url, index) => (
    <Box
      key={index}
      sx={{
        width: "100%",
        height: "90vh",
        background: "red",
        overflow: "hidden",
      }}
    >
      <Image
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={url}
        alt="slider"
      />
    </Box>
  ));
  return (
    <Stack
      direction="column"
      sx={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}
    >
      
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Welcome to FreshCart
        </Typography>
        <Typography variant="subtitle1">
          Your ultimate destination for fashion, electronics, and more
        </Typography>
      </Box>

     
      <Slider {...settings}>
        {imagesSlider.map((img, i) => (
          <Box key={i}>{img}</Box>
        ))}
      </Slider>
    </Stack>
  );
}
