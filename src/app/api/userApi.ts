import { apiInstance } from "./axiosInstance";

export const fetchUserApi = async () => {
  const response = await apiInstance.post('/register');
    if (!response.data) {
      throw new Error('Failed to fetch user');
    }
    return response.data;
  };  