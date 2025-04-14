import { apiInstance } from "./axiosInstance";

export const fetchAdminApi = async () => {
  const response = await apiInstance.post('/users');
  if (!response.data) {
    throw new Error('Failed to fetch admin');
  }
  return response.data;
};  