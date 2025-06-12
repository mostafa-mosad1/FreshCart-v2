"use client";

import { useGetProductsQuery } from "@/Redux/features/ShopApi";
import ShopCardProducts from "./ShopCardProducts";
import { Box, Grid, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import React from "react";

interface Iprops {}
function ShopProductsData({}: Iprops) {
    const [page, setPage] = React.useState(3);
  const { isLoading, data, error } = useGetProductsQuery({page});

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };


  if (isLoading) return <p>loading.....................</p>;
  const allProducts = data.data?.map(
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
        ratingAverage={pro.ratingsAverage}
        id={pro.id}
        title={pro.title}
        price={pro.price}
        category={pro.category.name}
        img={pro.imageCover}
      />
    )
  );
 
console.log(data)
  return (
    <>
    
  <Stack
  marginBlock={6}
    direction="row"  
    gap={"4px"}      
    sx={{
      width: "100%",
      flexWrap: "wrap",  
      alignItems:"center",
      justifyContent:"center"
    }}
   
  >
    {allProducts}
  </Stack>

  <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
    </>
  );
}

export default ShopProductsData;
