import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode } from "../../../types/types";
import { fetchPodcastEpisodes } from "../../../api/episode";
import { useAppSelector } from "../../../hooks/store";

export function useEpisode() {
  const selectedPodcast = useAppSelector(
    (state) => state.podcasts.selectedPodcast
  );

  const [episodeList, setEpisodeList] = useState<Episode[] | null>(null);

  const { podcastId } = useParams<{ podcastId: string | undefined }>();

  useEffect(() => {
    async function fetchData() {
      if (podcastId) {
        const podcastDetails = await fetchPodcastEpisodes(podcastId);
        setEpisodeList(podcastDetails.slice(1) || null);
      }
    }

    fetchData();
  }, [podcastId]);

  return { selectedPodcast, episodeList };
}
