import { apiInstance } from "./axiosInstance";

export type AdvensData = {
  eventId: number;
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageLink: string | null;
  // isModer: boolean;
}

export const fetchAdvApi = async (advData: AdvensData) => {
  const response = await apiInstance.post(
    '/event/create',
    advData
  );
  if (!response.data) {
    throw new Error('Failed to fetch advensed');
  }
  return response.data;
};

export const updateAdApi = async (advData: AdvensData) => {
  const response = await apiInstance.put('/event/update', advData, { withCredentials: true });
  return response.data;
};

export const updateStatusAdApi = async (advData: AdvensData) => {
  const response = await apiInstance.put('/event/update-status', advData, { withCredentials: true });
  return response.data;
};

export const deleteAdApi = async (title: string) => {
  const response = await apiInstance.delete('/event/delete/{eventId}', { withCredentials: true });
  return response.data;
};