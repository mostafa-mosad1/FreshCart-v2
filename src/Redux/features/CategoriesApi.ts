import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const CategpriesApi = createApi({
reducerPath:"category",
    tagTypes:["CategpriesApi"],
    baseQuery:(fetchBaseQuery({baseUrl:"https://ecommerce.routemisr.com/api/v1/"})),
    endpoints:(builder)=>({
        getCategories :builder.query({
            query:()=>{
               return {url:"/categories",method:"Get"}
            }
        })
    })
})

export const {useGetCategoriesQuery} =CategpriesApi