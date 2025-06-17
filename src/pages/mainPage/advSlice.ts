import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdvensExportData } from '../../app/api/GetApi';


export interface AdvState {
  eventId: number;
  creatorName: string;
  title: string;
  description: string;
  eventDate: string;
  imageLink: string;
  maxParticipants: number | null;
  participantsCount: number | string
}

interface AdvGetSliceState {
  data: AdvState[];
  loading: boolean,
}
const initialState: AdvGetSliceState = {
  data: [{
    eventId: 123,
    creatorName: "Admin",
    title: "Новый год",
    description: "Dics",
    eventDate: "20.05.2025",
    imageLink: "https://blog.adobe.com/en/publish/2024/10/14/media_1ca79b205381242c5f8beaaee2f0e1cfb2aa8f324.png?width=2000&format=webply&optimize=medium",
    maxParticipants: 30,
    participantsCount: 8
  }],
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




