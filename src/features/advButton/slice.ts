import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdvensData } from '../../app/api/advApi';

export interface AdvState {
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageBase64?: string;
  isModer: boolean;
}

interface AdvSliceState {
  [x: string]: any;
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
      state.loading = true;
      state.error = null;
    },
    fetchAdvSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.items.push(action.payload);
    },
    fetchAdvFailure: (state, action: PayloadAction<string>) => {
    },
    deleteAdRequest: (state, action: PayloadAction<string>) => {
    },
    updateAdRequest: (state, action: PayloadAction<AdvState>) => {
    },
  },
});

export const { fetchAdvRequest, fetchAdvSuccess, fetchAdvFailure, deleteAdRequest, updateAdRequest } = actions;
