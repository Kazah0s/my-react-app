// import { apiInstance } from "./axiosInstance";

// export type RegisterRawData = {
//   username: string;
//   password: string;
// }

// export type RegisterRecievedData = {
//   username: string;
//   status: number;
//   data: boolean;
// }



// export const fetchLoginApi = async (regData: RegisterRawData) => {
//   const response = await apiInstance.post('/auth/login', regData);
//   if (!response.data) {
//     throw new Error('Failed to fetch regist');
//   }
//   return response;
// };  

// regApi.ts
// regApi.ts
import { apiInstance } from "./axiosInstance";

export type RegisterRawData = {
  username: string;
  password: string;
};

export type LoginResponse = {
  username?:string;
  token: string;
  isAdmin?: boolean;
};

export const fetchRegisterApi = async (regData: RegisterRawData) => {
  const response = await apiInstance.post('/auth/register', regData);
  if (!response.data) {
    throw new Error('Failed to fetch regist');
  }
  return response;
};

export const fetchLoginApi = async (regData: RegisterRawData): Promise<any> => {
  const response = await apiInstance.post('/auth/login', regData);
  if (!response.data) throw new Error('Failed to login');

  const { token } = response.data;
  localStorage.setItem('token', token);

  return response;
};