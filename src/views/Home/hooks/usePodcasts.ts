import { useEffect, useState } from "react";
import { Podcast } from "../../../types";
import {
  cachePodcastsInLocalStorage,
  loadPodcastsFromLocalStorage,
} from "../helper";
import { fetchPodcasts } from "../../../api/podcasts";
import { useAppDispatch } from "../../../hooks/store";
import { startLoading, stopLoading } from "../../../state/loading/slice";

const usePodcasts = () => {
  const [podcasts, setPodcastsState] = useState<Podcast[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startLoading());

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
          dispatch(stopLoading());
          return;
        }
      }
    }

    fetchPodcasts()
      .then((fetchedPodcasts) => {
        setPodcastsState(fetchedPodcasts);
        cachePodcastsInLocalStorage(fetchedPodcasts);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        dispatch(stopLoading());
      });
  }, [dispatch]);

  return podcasts;
};

export default usePodcasts;
