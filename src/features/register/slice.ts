import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterData } from '../../app/api/regApi';

interface RegisterState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  data: null,
  loading: false,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: 'register',
  initialState,
  reducers: {
    fetchRegisterRequest: (state, action: PayloadAction<RegisterData>) => {
      state.data = action.payload;
      state.loading = true;
    },
    fetchRegisterSuccess: (state, action: PayloadAction<any>) => {
      // state.data = action.payload;
      state.loading = false;
    },
    fetchRegisterFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchRegisterRequest, fetchRegisterSuccess, fetchRegisterFailure } = actions;
