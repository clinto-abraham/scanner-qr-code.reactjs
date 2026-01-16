// api/axiosClient.js
import axios from "axios";
import { BACKEND_API_URL } from "../routes/apiUrl";

export const axiosClient = axios.create({
  baseURL: BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
