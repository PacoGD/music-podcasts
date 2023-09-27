import { Episode } from "../../types/types";

export function isCacheRecent(podcastId: string | undefined): boolean {
  const cachedPodcastDate = localStorage.getItem(`podcast_${podcastId}_date`);

  if (!cachedPodcastDate) {
    return false;
  }

  return (
    new Date().getTime() - new Date(cachedPodcastDate).getTime() <
    24 * 60 * 60 * 1000
  );
}

export function getCachedPodcastData(
  podcastId: string | undefined
): Episode[] | null {
  const cachedPodcastData = localStorage.getItem(`podcast_${podcastId}`);

  return cachedPodcastData ? JSON.parse(cachedPodcastData) : null;
}

export function cachePodcastData(
  podcastId: string | undefined,
  data: Episode[] | null
) {
  localStorage.setItem(`podcast_${podcastId}`, JSON.stringify(data));
  localStorage.setItem(`podcast_${podcastId}_date`, new Date().toString());
}
