import { apiInstance } from "./axiosInstance";

export type RegisterData = {
  username: string,
  password: string
}

export const fetchRegisterApi = async (regData: RegisterData) => {
  const response = await apiInstance.post('/register', regData);
  if (!response.data) {
    throw new Error('Failed to fetch admin');
  }
  return response.data;
};  