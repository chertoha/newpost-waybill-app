import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery, BASE_URL, waybillDataRequest } from "services/api";
import { WaybillStatus, WaybillStatusDefaultResponse } from "types/types";

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
