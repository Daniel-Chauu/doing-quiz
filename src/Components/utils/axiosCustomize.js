import axios from "axios";
import NProgress from "nprogress";
import { store } from "../redux/store";

const instance = axios.create({
  baseURL: "http://localhost:8081/",
});

instance.interceptors.request.use(
  function (config) {
    const access_token = store?.getState()?.user?.account?.access_token;
    config.headers["Authorization"] = "Bearer " + access_token;
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
    NProgress.done();
    return response.data;
  },
  function (error) {
    // NProgress.done();
    return Promise.reject(error);
  }
);

export default instance;
