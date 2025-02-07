import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;