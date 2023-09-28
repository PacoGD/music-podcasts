import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode } from "../../../types/types";
import { fetchPodcastEpisodes } from "../../../api/episode";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import {
  cachePodcastData,
  getCachedPodcastData,
  isCacheRecent,
} from "../helper";
import { startLoading, stopLoading } from "../../../state/loading/slice";

export function useEpisode() {
  const selectedPodcast = useAppSelector(
    (state) => state.podcasts.selectedPodcast
  );

  const [episodeList, setEpisodeList] = useState<Episode[] | null>(null);

  const { podcastId } = useParams<{ podcastId: string | undefined }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (podcastId) {
        dispatch(startLoading());
        if (isCacheRecent(podcastId)) {
          setEpisodeList(getCachedPodcastData(podcastId));
        } else {
          const podcastDetails = await fetchPodcastEpisodes(podcastId);

          cachePodcastData(podcastId, podcastDetails);
          setEpisodeList(podcastDetails || null);
        }
        dispatch(stopLoading());
      }
    }

    fetchData();
  }, [podcastId, dispatch]);

  return { selectedPodcast, episodeList };
}
