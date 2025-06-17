import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignState {
  isSign: boolean
}

const initialState: SignState = {
  isSign: false
};

export const { actions, reducer } = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    fetchSignAdv: (state, action: PayloadAction<number>) => {
      state.isSign = true;
    },
  },
});

export const { fetchSignAdv, } = actions;
