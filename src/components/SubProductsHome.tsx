"use client";
import { useGetSubProductsQuery } from "@/Redux/features/ShopApi";
import ProductCard from "./ProductCard";
import { Box, Divider, Skeleton, Stack, Typography } from "@mui/material";
import SkeletonHome from "./SkeletonHome";
import musicImage from "../assests/musicImage.png";
import Image from "next/image";

export default function SubProductsHome() {
  const { isLoading, data, error } = useGetSubProductsQuery("");



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
    
    <Typography variant="h6" sx={{padding:"10px",borderLeft: "12px solid green",paddingLeft:"30px",margin:"20px"}}  >This Month</Typography>
    <Typography variant="h4" sx={{padding:"10px"}}  >Best Selling Products</Typography>
      {isLoading?<Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ gap: "10px" }}
        flexWrap={"wrap"}
        direction={"row"}
        marginBlock={{xl:6}}
      >
        {Array.from(new Array(10)).map((item, index) => (
          <SkeletonHome />
        ))}
      </Stack>: <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ gap: "10px",marginBlock:{xl:10} }}
        flexWrap={"wrap"}
        direction={"row"}
      >
        {products}
      </Stack>}
     
      <Image style={{width:"100%",objectFit:"contain"}} src={musicImage} alt="freshcart-Logo" />

      <Divider sx={{margin:5,}} variant="middle" component="p" />
    </>
  );
}
