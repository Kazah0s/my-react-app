import axios from 'axios';
import process from "process"

// Базовый URL из переменной окружения
const baseURL = process.env.REACT_APP_API_BASE_URL;

// Создаем инстанс Axios
const axiosInstance = axios.create({
  baseURL, // Базовый URL
  timeout: 10000, // Таймаут запроса (10 секунд)
  headers: {
    'Content-Type': 'application/json'
  },
});

axiosInstance.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

axiosInstance.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  console.error('Error:', error);
  return Promise.reject(error);
});

export const apiInstance = axiosInstance;



// REACT_APP_API_BASE_URL="https://jsonplaceholder.typicode.com"