import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LIVE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
//   withCredentials: true, // If you're handling auth cookies/session
});

export default axiosInstance;

