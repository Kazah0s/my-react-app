import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdminState = {
  data: null,
  loading: false,
  error: null,
};

export const {actions, reducer} = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    fetchAdminRequest: (state) => {
      state.loading = true;
    },
    fetchAdminSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchAdminFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchAdminRequest, fetchAdminSuccess, fetchAdminFailure } = {actions, reducer}.actions;
// export default adminSlice.reducer;