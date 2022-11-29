import axios from "axios";
import { NProgress } from "nprogress";

const instance = axios.create({
  baseURL: "http://localhost:8081/",
});

axios.interceptors.request.use(
  function (config) {
    NProgress.start();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // NProgress.done();
    return Promise.reject(error);
  }
);

export default instance;
