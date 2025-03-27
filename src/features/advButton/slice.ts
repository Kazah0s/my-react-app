import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdvensData } from '../../app/api/advApi';

interface AdvState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AdvState = {
  data: null,
  loading: false,
  error: null,
};

export const { actions, reducer } = createSlice({
  name: 'Adv',
  initialState,
  reducers: {
    fetchAdvRequest: (state, action: PayloadAction<AdvensData>) => {
      state.data = action.payload;
      state.loading = true;
    },
    fetchAdvSuccess: (state, action: PayloadAction<any>) => {
      // state.data = action.payload;
      state.loading = false;
    },
    fetchAdvFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchAdvRequest, fetchAdvSuccess, fetchAdvFailure } = actions;
