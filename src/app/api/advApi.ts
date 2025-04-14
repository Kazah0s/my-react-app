import { apiInstance } from "./axiosInstance";

export type AdvensData = {
  theme: string,
  description: string,
  date: string,
  image: string
}

export const fetchAdvApi = async (advData: AdvensData) => {
  const response = await apiInstance.post('/users', advData);
  if (!response.data) {
    throw new Error('Failed to fetch admin');
  }
  return response.data;
};  