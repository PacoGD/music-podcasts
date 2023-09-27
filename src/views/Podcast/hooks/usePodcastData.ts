import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode } from "../../../types/types";
import { fetchPodcastEpisodes } from "../../../api/episode";
import { useAppSelector } from "../../../hooks/store";
import {
  cachePodcastData,
  getCachedPodcastData,
  isCacheRecent,
} from "../helper";

export function usePodcastData() {
  const selectedPodcast = useAppSelector(
    (state) => state.podcasts.selectedPodcast
  );

  const [episodeList, setEpisodeList] = useState<Episode[] | null>(null);

  const { podcastId } = useParams<{ podcastId: string | undefined }>();

  useEffect(() => {
    async function fetchData() {
      if (podcastId) {
        if (isCacheRecent(podcastId)) {
          setEpisodeList(getCachedPodcastData(podcastId));
        } else {
          const podcastDetails = await fetchPodcastEpisodes(podcastId);

          cachePodcastData(podcastId, podcastDetails);
          setEpisodeList(podcastDetails || null);
        }
      }
    }

    fetchData();
  }, [podcastId]);

  return { selectedPodcast, episodeList };
}
