"use client";
import { useGetProductsQuery } from "@/Redux/features/ShopApi";
import ShopCardProducts from "./ShopCardProducts";
import { Box, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ShopProductSkeleton from "./ShopProductSkeleton";

interface IFormInput {
  search: string;
}

interface Iprops {}
function ShopProductsData({}: Iprops) {
  const [page, setPage] = useState(1);
  const [textSearch, setTextSearch] = useState<any>(null);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setTextSearch(data.search);
  };
  const { isLoading, data, error } = useGetProductsQuery({ page, textSearch });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };

//   if (isLoading) return <p>loading.....................</p>;

  let filteredProducts = data?.data;

  if (textSearch && textSearch !== "") {
    filteredProducts = data.data.filter((el: any) =>
      el.title.toLowerCase().includes(textSearch.toLowerCase())
    );
  }

  const allProducts = filteredProducts?.map(
    (pro: {
      id: number;
      imageCover: string;
      description: string;
      price: number;
      ratingsAverage: number;
      title: string;
      category: { name: string };
    }) => (
      <ShopCardProducts
        key={pro.id}
        ratingAverage={pro.ratingsAverage}
        id={pro.id}
        title={pro.title}
        price={pro.price}
        category={pro.category.name}
        img={pro.imageCover}
      />
    )
  );

  return (
    <>
      <Box
        sx={{
          boxShadow: 2,
          width: { xs: "250px", md: "500px" },
          overflow: "hidden",
          mx: "auto",
          my: 3,
          backgroundColor: "background.paper",
          position: "sticky",
          top: "10px",
          zIndex: 1,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            {...register("search")}
            value={textSearch || ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                "& fieldset": { border: "none" },
                backgroundColor: "background.paper",
                borderRadius: 1,
                width: { xs: "250px", md: "500px" },
              },
            }}
            onChange={searchHandler}
          />
        </form>
      </Box>

      <Stack
        marginBlock={6}
        direction="row"
        gap={"4px"}
        sx={{
          width: "100%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ gap: "10px" }}
            flexWrap={"wrap"}
            direction={"row"}
            marginBlock={{ xl: 6 }}
          >
            {Array.from(new Array(10)).map((item, index) => (
              <ShopProductSkeleton key={index} />
            ))}
          </Stack>
        ) : (
          allProducts
        )}
      </Stack>

      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
        marginBottom={2}
      >
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
}

export default ShopProductsData;
