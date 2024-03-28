import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL as string;

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('TOKEN');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (err) => {
    console.error('Error: ', err);
    return Promise.reject(err);
  },
);

export default axiosClient;
