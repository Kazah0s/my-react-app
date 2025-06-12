// import { apiInstance } from "./axiosInstance";

// export type AdvensExportData = {
//   eventId: number;
//   creatorName: string;
//   title: string;
//   description: string;
//   imageLink: string;
//   eventDate: string;
//   // isModer: boolean;
// }

// let page = 0;

// export const fetchAllAdvApi = async (page: number): Promise<AdvensExportData[]> => {
//   const response = await apiInstance.get('/event/get/all?page=' + page);
//   console.log(page);

//   if (!response.data || !Array.isArray(response.data.events)) {
//     throw new Error('Failed to fetch admin');
//   }
//   return response.data.events;
// };  

// GetApi.ts или advApi.ts
import { apiInstance } from "./axiosInstance";

export type AdvensExportData = {
  eventId: number;
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageLink: string | null;
};

let page = 0;

export const fetchAllAdvApi = async (page: number): Promise<AdvensExportData[]> => {
  const response = await apiInstance.get(`/event/get/all?page=${page}`);
  if (!response.data || !Array.isArray(response.data.events)) {
    throw new Error('Failed to fetch events');
  }
  return response.data.events;
};