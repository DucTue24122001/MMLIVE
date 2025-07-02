'use client'
import axios from 'axios';


const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN || "https://localhost:5000/",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });
  
  export default axiosClient;