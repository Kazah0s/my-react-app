import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdvensData } from '../../app/api/advApi';

export interface AdvState {
  eventId: number;
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageLink: string | null;
  // isModer: boolean;
}

interface AdvSliceState {
  data: AdvState[];
  loading: boolean;
  error: string | null;
}

const initialState: AdvSliceState = {
  data: [],
  loading: false,
  error: null
};

export const { actions, reducer } = createSlice({
  name: 'adv',
  initialState,
  reducers: {
    fetchAdvRequest: (state, action: PayloadAction<AdvensData>) => {
      state.data.push(action.payload)
      state.loading = true;
      state.error = null;
    },
    fetchAdvSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchAdvFailure: (state, action: PayloadAction<string>) => {

    },
    deleteAdRequest: (state, action: PayloadAction<number>) => {

    },
    updateAdvRequest: (state, action: PayloadAction<AdvensData>) => {
      state.loading=true
    },
    updateStatusAdRequest: (state, action: PayloadAction<{eventId: number, newStatus: string}>) => {

    },
  },
});

export const { fetchAdvRequest, fetchAdvSuccess, fetchAdvFailure, deleteAdRequest, updateAdvRequest, updateStatusAdRequest } = actions;
