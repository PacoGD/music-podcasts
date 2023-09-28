import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import podcastsReducer from "./podcasts/slice";
import episodeReducer from "./episodes/slice";
import loadingReducer from "./loading/slice";

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  episodes: episodeReducer,
  loading: loadingReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
