"use client";
import { useGetProductsQuery } from "@/Redux/features/ShopApi";
import { Stack } from "@mui/material";
import SubProductCard from "./SubProductCard";





export default function SubProductsData() {
 

    const { isLoading, data, error } = useGetProductsQuery("");
  console.log(data);
  let products = data?.data?.map((pro: any) =>  <SubProductCard  id={pro.id} name={pro.title} price={pro.price} images={pro.images}  />);

  
  return <Stack
  justifyContent={"center"}
  alignItems={"center"}
  sx={{gap:"10px"}}
  flexWrap={"wrap"}
  direction={"row"} >
{products}
  </Stack>;
}
