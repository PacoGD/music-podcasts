import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episodes: [],
};

export const episodesSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    addEpisodes: (state, action) => ({ ...state, podcastList: action.payload }),
  },
});

export const { addEpisodes } = episodesSlice.actions;

export default episodesSlice.reducer;
