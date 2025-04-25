import { apiInstance } from "./axiosInstance";

export type RegisterData = {
  username: string,
  password: string
}

export const fetchRegisterApi = async (regData: RegisterData) => {
  const response = await apiInstance.post('/users', regData);
  if (!response.data) {
    throw new Error('Failed to fetch regist');
  }
  return response.data;
};  