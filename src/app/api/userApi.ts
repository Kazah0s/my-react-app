import { apiInstance } from "./axiosInstance";

export type UsersData = {
  username: string,
  password: string
}

export const fetchUserApi = async () => {
  const response = await apiInstance.get('/users');
  if (!response.data) {
    throw new Error('Failed to fetch user');
  }
  return response.data;
};  