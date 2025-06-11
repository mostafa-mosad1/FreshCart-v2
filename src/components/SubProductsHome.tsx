"use client";
import { useGetSubProductsQuery } from "@/Redux/features/ShopApi";
import ProductCard from "./ProductCard";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import SkeletonHome from "./SkeletonHome";

export default function SubProductsHome() {
  const { isLoading, data, error } = useGetSubProductsQuery("");

  if (isLoading) {
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ gap: "10px" }}
        flexWrap={"wrap"}
        direction={"row"}
      >
        {Array.from(new Array(10)).map((item, index) => (
          <SkeletonHome />
        ))}
      </Stack>
    );
  }

  console.log(data);
  let products = data?.data?.map((pro: any) => (
    <ProductCard
      id={pro.id}
      name={pro.title}
      price={pro.price}
      images={pro.images}
    />
  ));

  return (
    <>
    <Typography variant="h4" sx={{padding:"10px"}}  >Best Selling Products</Typography>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ gap: "10px" }}
        flexWrap={"wrap"}
        direction={"row"}
      >
        {products}
      </Stack>
    </>
  );
}
