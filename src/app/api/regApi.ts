
export const fetchRegisterApi = async (regData: RegisterRawData) => {
  const response = await apiInstance.post('/auth/register', regData);
  if (!response.data) {
    throw new Error('Failed to fetch regist');
  }
  return response;
};
import { apiInstance } from "./axiosInstance";

export type RegisterRawData = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  isAdmin?: boolean;
};

export const fetchLoginApi = async (regData: RegisterRawData): Promise<LoginResponse> => {
  const response = await apiInstance.post('/auth/login', regData);
  if (!response.data) throw new Error('Failed to login');

  const { accessToken, isAdmin } = response.data;

  localStorage.setItem('accessToken', accessToken);

  return { accessToken, isAdmin };
};