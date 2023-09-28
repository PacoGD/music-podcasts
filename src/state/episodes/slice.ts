import { createSlice } from "@reduxjs/toolkit";
import { Episode } from "../../types";

interface EpisodesState {
  episode: Episode | null;
}

const initialState: EpisodesState = {
  episode: null,
};

export const episodesSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    addEpisode: (state, action) => ({ ...state, episode: action.payload }),
  },
});

export const { addEpisode } = episodesSlice.actions;

export default episodesSlice.reducer;
