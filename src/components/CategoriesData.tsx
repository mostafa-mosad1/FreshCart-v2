"use client";
import { useGetCategoriesQuery } from "@/Redux/features/CategoriesApi";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

function CategoriesData() {
  const { isLoading, data, error } = useGetCategoriesQuery("");
  return (
    <>
      {isLoading ? (
        <Stack
          marginBlock={6}
          direction="row"
          gap={1}
          sx={{
            width: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
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
          <Stack
            marginBlock={6}
            direction="row"
            gap={1}
            sx={{
              width: "100%",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {data?.data?.map((cate: any, index: number) => (
              <Box key={cate.name}>
                <Card
                  sx={{
                    width: "300px",
                    "&:hover": {
                      "& .media": {
                        transform: "scale(1.05)",
                      },
                    },
                    transition: "transform 0.5s ease",
                  }}
                >
                  <CardActionArea
                    // onClick={() => setSelectedCard(index)}
                    // data-active={selectedCard === index ? "" : undefined}
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
                      className="media"
                      sx={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
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
          </Stack>
        </>
      )}
    </>
  );
}

export default CategoriesData;
