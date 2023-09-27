import { useEffect, useState } from "react";
import { Podcast } from "../../../types/types";
import {
  cachePodcastsInLocalStorage,
  loadPodcastsFromLocalStorage,
} from "./helper";
import { fetchPodcasts } from "../../../api/podcasts";

const usePodcasts = () => {
  const [podcasts, setPodcastsState] = useState<Podcast[]>([]);

  useEffect(() => {
    const currentTime = new Date();
    const cachedPodcasts = loadPodcastsFromLocalStorage();

    if (cachedPodcasts) {
      const cachedTimestamp = localStorage.getItem("podcastsTimestamp");
      if (cachedTimestamp) {
        const timestamp = new Date(cachedTimestamp);
        if (
          currentTime.getTime() - timestamp.getTime() <=
          24 * 60 * 60 * 1000
        ) {
          setPodcastsState(cachedPodcasts);
          return;
        }
      }
    }

    fetchPodcasts()
      .then((fetchedPodcasts) => {
        setPodcastsState(fetchedPodcasts);
        cachePodcastsInLocalStorage(fetchedPodcasts);
      })
      .catch((err) => console.error(err));
  }, []);

  return podcasts;
};

export default usePodcasts;
