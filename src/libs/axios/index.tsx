import axios from 'axios';

import { storage } from '~/utils';

const accessToken = storage.get('ACCESS_TOKEN');
const baseURL = import.meta.env.VITE_API_URL as string;

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
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
