import { createApi } from "@reduxjs/toolkit/query/react";
import {
  axiosBaseQuery,
  BASE_URL,
  warehouseListRequest,
  warehouseSettlementsRequest,
} from "services/api";
import {
  WarehouseRequest,
  WarehouseResponse,
  WarehouseSettlements,
} from "types/types";

export const warehouseApi = createApi({
  reducerPath: "warehouseApi",

  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL as string,
  }),

  endpoints: (builder) => ({
    getSettlements: builder.query<WarehouseSettlements, string>({
      query: (search) => ({
        url: "",
        method: "POST",
        data: warehouseSettlementsRequest(search),
      }),
    }),

    getWarehouses: builder.query<WarehouseResponse, WarehouseRequest>({
      query: (request) => ({
        url: "",
        method: "POST",
        data: warehouseListRequest(request),
      }),
    }),
  }),
});

export const {
  useGetSettlementsQuery,
  useGetWarehousesQuery,
  useLazyGetWarehousesQuery,
} = warehouseApi;
