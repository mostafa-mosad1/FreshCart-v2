import { Reducer } from "../../../node_modules/redux/src/types/reducers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";



export const ShopApi = createApi({
reducerPath:"shop",
    tagTypes:["ShopApi"],
    baseQuery:(fetchBaseQuery({baseUrl:"https://ecommerce.routemisr.com/api/v1/"})),
    endpoints:(builder)=>({
        getProducts :builder.query({
            query:()=>{
               return {url:"/products",method:"Get"}
            }
        }),
        getSubProducts :builder.query({
            query:()=>{
               return {url:"products?limit=10&sort=-price&price[lte]=1200",method:"Get"}
            }
        }),
    })
})

export const {useGetProductsQuery,useGetSubProductsQuery} =ShopApi