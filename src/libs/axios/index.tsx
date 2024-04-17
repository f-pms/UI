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
    console.error('Error: ', err.response.status);
    if (err.response.status === 401) {
      localStorage.removeItem('TOKEN');
    }
    if (err.response.status === 403) {
      window.location.href = '/forbidden';
      localStorage.removeItem('TOKEN');
    }
    return Promise.reject(err);
  },
);

export default axiosClient;
