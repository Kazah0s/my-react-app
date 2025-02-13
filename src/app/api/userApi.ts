import { apiInstance } from "./axiosInstance";

export const fetchUserApi = async () => {
  const response = await apiInstance.get('/users/1');
    if (!response.data) {
      throw new Error('Failed to fetch admin');
    }
    return response.data;
  };  