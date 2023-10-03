import axios from "axios";
import queryString from "query-string";

//const baseUrl = "http://127.0.0.1:5000/api/v1/";

const publicClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});
publicClient.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] =
      "GET, PUT, DELETE, PATCH, OPTIONS";
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);
export default publicClient;
