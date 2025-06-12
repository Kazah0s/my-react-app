import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterRawData } from '../../app/api/regApi';

interface LoginState {
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
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
    fetchLoginSuccess: (state, action: PayloadAction) => {
      state.loading = false;
    },
    fetchLoginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure } = actions;
