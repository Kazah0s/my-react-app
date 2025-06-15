// axiosInstance.ts
import axios from 'axios';
import { error } from 'console';
import { request } from 'http';
import process from "process"

const baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Добавляем токен ко всем запросам
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);




axiosInstance.interceptors.request.use(request =>{
  console.log('Start Request', request);
  return request
});

axiosInstance.interceptors.request.use(response =>{
  console.log('Response', response);
  return response
}, error=> {
 console.error("error", error);
 return Promise.reject(error)
});


export const apiInstance = axiosInstance;

// REACT_APP_API_BASE_URL="https://jsonplaceholder.typicode.com"