import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  podcastList: [],
};

export const podcastsSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    addPodcasts: (state, action) => ({ ...state, podcastList: action.payload }),
  },
});

export const { addPodcasts } = podcastsSlice.actions;

export default podcastsSlice.reducer;
