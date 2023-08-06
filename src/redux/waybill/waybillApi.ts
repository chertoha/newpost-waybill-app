import { createApi } from "@reduxjs/toolkit/query/react";
import { api, BASE_URL, waybillDataRequest } from "services/api";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { WaybillStatus, WaybillStatusDefaultResponse } from "types/types";

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

export const waybillApi = createApi({
  reducerPath: "waybillApi",

  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL as string,
  }),

  endpoints: (builder) => ({
    getStatus: builder.query<WaybillStatus, string>({
      query: (number) => ({
        url: "",
        method: "POST",
        data: waybillDataRequest(number),
      }),
      transformResponse: (
        response: WaybillStatusDefaultResponse
      ): WaybillStatus => {
        const { success, data, errors, warnings } = response;
        return {
          success,
          waybill: data[0],
          errors,
          warnings,
        };
      },
    }),
  }),
});

export const { useGetStatusQuery } = waybillApi;
