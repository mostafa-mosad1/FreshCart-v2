"use client";
import { useGetProductsQuery } from "@/Redux/features/ShopApi";
import { log } from "console";
import ProductCard from "./ProductCard";
import { Stack } from "@mui/material";





export default function AllProductsData() {
 

    const { isLoading, data, error } = useGetProductsQuery("");
  console.log(data);
  let products = data?.data?.map((pro: any) =>  <ProductCard id={pro.id} name={pro.title} price={pro.price} images={pro.images} />);

  
  return <Stack
  justifyContent={"center"}
  alignItems={"center"}
  sx={{gap:"10px"}}
  flexWrap={"wrap"}
  direction={"row"} >
{products}
  </Stack>;
}
