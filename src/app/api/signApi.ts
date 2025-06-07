import { apiInstance } from "./axiosInstance";

export const fetchSignApi = async (eventId: number) => {
  const response = await apiInstance.post('/', eventId, { withCredentials: true });
  if (!response.data) {
    throw new Error('Failed to fetch Sing Up!');
  }
  return response;
};
