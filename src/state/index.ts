import { configureStore } from "@reduxjs/toolkit";
import podcastsReducer from "./podcasts/slice";
import episodeReducer from "./episodes/slice";
import loadingReducer from "./loading/slice";

export const store = configureStore({
  reducer: {
    podcasts: podcastsReducer,
    episodes: episodeReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
