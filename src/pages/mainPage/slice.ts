import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: "",
  data: null,
  loading: false,
  error: null,
};

export const {actions, reducer} = createSlice({
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

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = actions;
// export default userSlice.reducer;