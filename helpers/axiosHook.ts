import axios from "axios";

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const token = process.env.NEXT_PUBLIC_API_KEY!;
const url = process.env.NEXT_PUBLIC_API_URL!;

const axiosHook = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${url}`,
  timeout: 9000,
  cancelToken: source.token,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  },
});

axiosHook.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosHook;
