import axios from "axios";

const BASE_URL = process.env.REACT_APP_NP_API_ENTRY_POINT;
axios.defaults.baseURL = BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export { BASE_URL, api };
