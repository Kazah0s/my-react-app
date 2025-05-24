import { apiInstance } from "./axiosInstance";

export type RegisterRawData = {
  username: string;
  password: string;
}

export type RegisterRecievedData = {
  username: string;
  status: number;
  data: boolean;
}

export const fetchRegisterApi = async (regData: RegisterRawData) => {
  const response = await apiInstance.post('/auth/login', { regData }, {
    withCredentials: true
  });
  if (!response.data) {
    throw new Error('Failed to fetch regist');
  }
  return response;
};  