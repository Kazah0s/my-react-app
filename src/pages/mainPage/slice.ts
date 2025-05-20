import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  password: string,
  moderator: boolean,
  loading: boolean;
}

const initialState: UserState = {
  username: "sam",
  password: "user",
  moderator: true,
  loading: false,
};

export const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<any>) => {
      state.username = action.payload.username
      state.password = action.payload.password
      state.moderator = action.payload.moderator

      state.loading = false
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },
  },
});

console.log(initialState)

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = actions;
// export default userSlice.reducer;

