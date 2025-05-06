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

const initialState: AdvState[] = [
  {
    creatorName: 'sam',
    title: "1",
    description: "",
    eventDate: "",
    imageBase64: "https://purr.objects-us-east-1.dream.io/i/8M3AW.jpg",
    isModer: false,
  },
  {
    creatorName: 'frank',
    title: "2",
    description: "",
    eventDate: "",
    imageBase64: "https://purr.objects-us-east-1.dream.io/i/8M3AW.jpg",
    isModer: true,
  },
  {
    creatorName: 'dave',
    title: "3",
    description: "",
    eventDate: "",
    imageBase64: "https://purr.objects-us-east-1.dream.io/i/8M3AW.jpg",
    isModer: false,
  }
];



export const { actions, reducer } = createSlice({
  name: 'adv',
  initialState,
  reducers: {
    fetchAdvRequest: (state, action: PayloadAction<AdvensData>) => {

    },
    fetchAdvSuccess: (state, action: PayloadAction<any>) => {

    },
    fetchAdvFailure: (state, action: PayloadAction<string>) => {

    },
  },
});

export const { fetchAdvRequest, fetchAdvSuccess, fetchAdvFailure } = actions;
