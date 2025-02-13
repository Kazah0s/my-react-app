import { apiInstance } from "./axiosInstance";

export const fetchAdminApi = async () => {
  const response = await apiInstance.get('/users/2');
    if (!response.data) {
      throw new Error('Failed to fetch admin');
    }
    return response.data;
  };  