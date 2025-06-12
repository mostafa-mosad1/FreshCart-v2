import { Reducer } from "../../../node_modules/redux/src/types/reducers";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";



export const ShopApi = createApi({
reducerPath:"shop",
    tagTypes:["ShopApi"],
    baseQuery:(fetchBaseQuery({baseUrl:"https://ecommerce.routemisr.com/api/v1/"})),
    endpoints:(builder)=>({
        getProducts :builder.query({
            query:({pageNumber})=>{

                let allApi = "/products?limit=10&page=1";

                if (pageNumber) {
                  allApi += `?limit=10&page=${pageNumber}`;
                }
        
                return { url: allApi,method:"Get" };
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



// let allApi = "/products";

// if (category) {
//   allApi += `?category=${category}`;
// }
// if (type) {
//   allApi += `${category ? "&" : "?"}type=${type}`;
// }

// return { url: allApi };