import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_BASE_URL;
console.log("Base URL:", URL);

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: URL
  }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ("/products")
        })
    })
})

export const {useGetAllProductsQuery} = productApi;