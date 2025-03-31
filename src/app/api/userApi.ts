import { apiInstance } from "./axiosInstance";

export const fetchUserApi = async () => {
  const response = await apiInstance.post('');
  if (!response.data) {
    throw new Error('Failed to fetch user');
  }
  return response.data;
};  