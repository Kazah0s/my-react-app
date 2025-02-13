// src/api/config.ts
import axios from 'axios';

// Базовый URL из переменной окружения
const baseURL = process.env.REACT_APP_API_BASE_URL;

// Создаем инстанс Axios
const axiosInstance = axios.create({
  baseURL, // Базовый URL
  timeout: 10000, // Таймаут запроса (10 секунд)
  headers: {
    'Content-Type': 'application/json', // Заголовки по умолчанию
  },
});

// Интерсепторы для запросов
axiosInstance.interceptors.request.use(
  (config) => {
    // Добавляем токен в заголовки, если он есть
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Интерсепторы для ответов
axiosInstance.interceptors.response.use(
  (response) => {
    // Обработка успешного ответа
    return response;
  },
  (error) => {
    // Обработка ошибок
    if (error.response?.status === 401) {
      // Перенаправление на страницу входа, если токен недействителен
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const apiInstance = axiosInstance ;