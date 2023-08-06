import axios from "axios";
import { WarehouseRequest } from "types/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";

const BASE_URL = process.env.REACT_APP_NP_API_ENTRY_POINT;
const API_KEY = process.env.REACT_APP_NP_API_KEY;

axios.defaults.baseURL = BASE_URL;
const api = axios.create({
  baseURL: BASE_URL,
});

const waybillDataRequest = (number: string) => ({
  apiKey: API_KEY,
  modelName: "TrackingDocument",
  calledMethod: "getStatusDocuments",
  methodProperties: {
    Documents: [{ DocumentNumber: number }],
  },
});

const warehouseSettlementsRequest = (search: string) => ({
  apiKey: API_KEY,
  modelName: "Address",
  calledMethod: "getCities",
  methodProperties: { Page: "1", FindByString: search, Limit: "20" },
});

const warehouseListRequest = ({ cityRef, page = "1" }: WarehouseRequest) => ({
  apiKey: API_KEY,
  modelName: "Address",
  calledMethod: "getWarehouses",
  methodProperties: {
    CityRef: cityRef,
    Page: page,
    Limit: 10,
  },
});

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

export {
  BASE_URL,
  api,
  waybillDataRequest,
  warehouseSettlementsRequest,
  warehouseListRequest,
  axiosBaseQuery,
};
