import { apiInstance } from "./axiosInstance";

export type UsersData = {
  username: string,
  password: string
}

export const fetchUserApi = async () => {
  const response = await apiInstance.post('/', {
    username: 'user',
    password: "user",
  }, {
    withCredentials: true
  });
  if (!response.data) {
    throw new Error('Failed to fetch user');
  }
  return response.data;
};  