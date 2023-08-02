import axios from "axios";

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

export { BASE_URL, api, waybillDataRequest };
