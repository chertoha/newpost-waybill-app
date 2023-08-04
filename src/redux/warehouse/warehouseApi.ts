import { createApi } from "@reduxjs/toolkit/query/react";
import {
  api,
  BASE_URL,
  warehouseListRequest,
  warehouseSettlementsRequest,
} from "services/api";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import {
  WarehouseRequest,
  WarehouseResponse,
  WarehouseSettlements,
} from "types/types";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await api({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

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
