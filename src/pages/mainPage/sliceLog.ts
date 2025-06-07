import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  password: string,
  moderator: boolean,
  loading: boolean;
}

interface IUser {
  username: string,
  isModer: boolean
}

const initialState: UserState = {
  username: "",
  password: "",
  moderator: false,
  loading: false,
};

export const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.username = action.payload.username
      state.moderator = action.payload.isModer

      state.loading = false
    }
  },
});

console.log(initialState)

export const { fetchUserRequest, fetchUserSuccess } = actions;
// export default userSlice.reducer;

