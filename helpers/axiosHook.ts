import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const token = process.env.NEXT_PUBLIC_API_KEY!;
const url = process.env.NEXT_PUBLIC_API_URL!;

const axiosHook = axios.create({
  baseURL: url,
  timeout: 9000,
  cancelToken: source.token,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

axiosHook.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export const instance = axios.create({
  baseURL: "/api/twitter/",
  timeout: 9000,
  cancelToken: source.token,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosHook;
