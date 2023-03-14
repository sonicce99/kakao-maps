import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import productionDomain from "../../utils/productionDomain";
import { RootState } from "../store";

const baseURL =
  process.env.NODE_ENV === "development" ? "/" : productionDomain(); //개발모드일 때 proxy서버로 요청보내고 배포모드일 때 실서버로 요청보내기

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  prepareHeaders: (headers, { getState }) => {
    // const accessToken = (getState() as RootState).auth.accessToken;
    // if (accessToken) {
    //   headers.set("authentication", `Bearer ${accessToken}`);
    // }
    return headers;
  },
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
