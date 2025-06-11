"use client";
import { useGetCategoriesQuery } from "@/Redux/features/CategoriesApi";
import Slider from "react-slick";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { CardMedia, Divider, Skeleton, Stack } from "@mui/material";

interface Iprops {}
function CategoriesSlider({}: Iprops) {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const { isLoading, data, error } = useGetCategoriesQuery("");

  const settings = {
    dots: false,
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "150px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          padding: "10px",
          borderLeft: "12px solid green",
          paddingLeft: "30px",
          margin: "20px",
        }}
      >
        Categories
      </Typography>

      <Typography variant="h4" sx={{ padding: "10px" }}>
        Browse By Category
      </Typography>

      {isLoading ? (
        <Stack direction={"row"} gap={2}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Box
            marginBlock={{xl:6}}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="rectangular"
                width="200px"
                height={200}
                sx={{ borderRadius: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width="110px"
                height={25}
                sx={{
                  borderRadius: 1,
                  mx: "auto",
                  margin: 2,
                  textAlign: "center",
                }}
              />
            </Box>
          ))}
        </Stack>
      ) : (
        <>
          <Slider {...settings}>
            {data?.data?.map((cate: any, index: number) => (
              <Box marginBlock={{xl:6}} key={cate.name}>
                <Card  sx={{ width: "400px" }}>
                  <CardActionArea
                    onClick={() => setSelectedCard(index)}
                    data-active={selectedCard === index ? "" : undefined}
                    sx={{
                      height: "100%",
                      "&[data-active]": {
                        backgroundColor: "action.selected",
                        "&:hover": {
                          backgroundColor: "action.selectedHover",
                        },
                      },
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      image={`${cate.image}`}
                      title="green iguana"
                    />

                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h5" component="div">
                        {cate.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Slider>
          <Divider sx={{ margin: 5 }} variant="middle" component="p" />
        </>
      )}
    </>
  );
}

export default CategoriesSlider;
