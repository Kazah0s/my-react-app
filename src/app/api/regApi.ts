import { apiInstance } from "./axiosInstance";

export type RegisterData = {
    name: string,
    fam: string,
    login: string,
    password: string
} 

export const fetchRegisterApi = async (regData:RegisterData) => {
  const response = await apiInstance.post('/users/3', regData);
    if (!response.data) {
      throw new Error('Failed to fetch admin');
    }
    return response.data;
  };  