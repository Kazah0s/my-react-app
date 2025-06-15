// sliceLog.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  moderator: boolean;
  loading: boolean;
}

const initialState: UserState = {
  username: "",
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
    fetchUserSuccess: (state, action: PayloadAction<{ username: string}>) => {
      state.username = action.payload.username;
      // state.moderator = action.payload.isModer;
      state.loading = false;
    },
    fetchUserLogout: (state) => {
      state.username = "";
      state.moderator = false;
      state.loading = false;
    }
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserLogout } = actions;
// export default userSlice.reducer;