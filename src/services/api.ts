import axios from "axios";
import { WarehouseRequest } from "types/types";

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
    Limit: 100,
  },
});

export {
  BASE_URL,
  api,
  waybillDataRequest,
  warehouseSettlementsRequest,
  warehouseListRequest,
};
