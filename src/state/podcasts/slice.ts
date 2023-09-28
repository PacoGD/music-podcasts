import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Podcast } from "../../types";

interface PodcastState {
  selectedPodcast: Podcast | null;
}

const initialState: PodcastState = {
  selectedPodcast: null,
};

export const podcastsSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    setSelectedPodcast: (state, action: PayloadAction<Podcast | null>) => {
      state.selectedPodcast = action.payload;
    },
  },
});

export const { setSelectedPodcast } = podcastsSlice.actions;

export default podcastsSlice.reducer;
