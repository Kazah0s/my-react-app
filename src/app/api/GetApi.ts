import { apiInstance } from "./axiosInstance";

export type AdvensExportData = {
  eventId: number;
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageLink: string;
  maxParticipants: number | null;
  participantsCount: number | string
};

let page = 0;

export const fetchAllAdvApi = async (page: number): Promise<AdvensExportData[]> => {
  const response = await apiInstance.get(`/event/get/all?page=${page}`);
  if (!response.data || !Array.isArray(response.data.events)) {
    throw new Error('Failed to fetch events');
  }
  return response.data.events;
};