import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  password: string,
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: "asd",
  password: "123",
  data: null,
  loading: false,
  error: null,
};

export const { actions, reducer } = createSlice({
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

console.log(initialState)

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = actions;
// export default userSlice.reducer;

