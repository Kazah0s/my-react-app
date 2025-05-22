import { apiInstance } from "./axiosInstance";

export const fetchAllAdvApi = async () => {
  const response = await apiInstance.get('/get/all');
  if (!response.data) {
    throw new Error('Failed to fetch admin');
  }
  return response.data;
};  