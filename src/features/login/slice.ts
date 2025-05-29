import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterRawData, RegisterRecievedData } from '../../app/api/regApi';

interface LoginState {
  username: string;
  moderator: boolean,

  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  username: "user",
  moderator: false,

  loading: false,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    fetchLoginRequest: (state, action: PayloadAction<RegisterRawData>) => {
      state.loading = true;
    },
    fetchLoginSuccess: (state, action: PayloadAction<{ username: string, isModer: boolean }>) => {
      state.loading = false;

      state.username = action.payload.username
      state.moderator = action.payload.isModer
    },
    fetchLoginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure } = actions;
