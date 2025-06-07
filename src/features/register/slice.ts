import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterRawData, RegisterRecievedData } from '../../app/api/regApi';

interface RegisterState {
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
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
    fetchRegisterSuccess: (state, action: PayloadAction) => {
      state.loading = false;
    },
    fetchRegisterFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } = actions;
