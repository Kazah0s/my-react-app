import { apiInstance } from "./axiosInstance";

export type IDKdata = {

}

export const fetchSignApi = async () => {
  const response = await apiInstance.post('/', { withCredentials: true });
  if (!response.data) {
    throw new Error('Failed to fetch Sing Up!');
  }
  return response;
};
