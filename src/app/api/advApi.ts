import { apiInstance } from "./axiosInstance";

export type AdvensData = {
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageBase64?: string;
  isModer: boolean;
}

export const fetchAdvApi = async (advData: AdvensData) => {
  const response = await apiInstance.post('/users', advData);
  if (!response.data) {
    throw new Error('Failed to fetch admin');
  }
  return response.data;
};  