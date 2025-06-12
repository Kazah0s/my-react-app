import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdvensExportData } from '../../app/api/GetApi';


export interface AdvGetState {
  eventId: number;
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageLink: string | null;

}

interface AdvGetSliceState {
  data: AdvGetState[];
  loading: boolean,
}
const initialState: AdvGetSliceState = {
  data: [],
  loading: false,
}
export const { actions, reducer } = createSlice({
  name: 'AllADV',
  initialState,
  reducers: {
    fetchAdvGetRequest: (state, action: PayloadAction<number>) => {
      state.loading = true
    },
    fetchAdvGetSuccess: (state, actions: PayloadAction<AdvensExportData[]>) => {
      state.loading = false
      state.data = actions.payload
    },
    fetchAdvGetFailure: (state, actions) => {
      state.loading = false
    }
  },
});

console.log(initialState)

export const { fetchAdvGetRequest, fetchAdvGetSuccess, fetchAdvGetFailure } = actions;




