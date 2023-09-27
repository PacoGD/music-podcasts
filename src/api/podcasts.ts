import { Podcast } from "../types/types";

export const fetchPodcasts = async (): Promise<Podcast[]> => {
  const API_URL =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  const response = await fetch(API_URL);
  const data = await response.json();

  return data.feed.entry;
};
