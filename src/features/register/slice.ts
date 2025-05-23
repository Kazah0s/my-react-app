import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterRawData, RegisterRecievedData } from '../../app/api/regApi';

interface RegisterState {
  username: string;
  moderator: boolean,

  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  username: "",
  moderator: false,

  loading: false,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: 'register',
  initialState,
  reducers: {
    fetchRegisterRequest: (state, action: PayloadAction<RegisterRawData>) => {
      state.loading = true;
    },
    fetchRegisterSuccess: (state, action: PayloadAction<{username: string, isModer: boolean}>) => {
      state.loading = false;
      
      state.username = action.payload.username
      state.moderator = action.payload.isModer
    },
    fetchRegisterFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } = actions;
