import { Podcast } from "../../types";

export const loadPodcastsFromLocalStorage = (): Podcast[] | null => {
  const cachedData = localStorage.getItem("podcastsData");
  const cachedTimestamp = localStorage.getItem("podcastsTimestamp");

  if (cachedData && cachedTimestamp) {
    const parsedData: Podcast[] = JSON.parse(cachedData);
    const timestamp = new Date(cachedTimestamp);
    const currentTime = new Date();

    if (currentTime.getTime() - timestamp.getTime() <= 24 * 60 * 60 * 1000) {
      return parsedData;
    }
  }

  return null;
};

export const cachePodcastsInLocalStorage = (podcasts: Podcast[]): void => {
  localStorage.setItem("podcastsData", JSON.stringify(podcasts));
  localStorage.setItem("podcastsTimestamp", new Date().toString());
};

export function filterPodcasts(
  podcasts: Podcast[],
  searchTerm: string
): Podcast[] {
  return podcasts.filter((podcast) => {
    const title = podcast.title.label;
    const artist = podcast["im:artist"].label;

    if (typeof title === "string" && typeof artist === "string") {
      const titleMatches = title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const artistMatches = artist
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return titleMatches || artistMatches;
    }

    return false;
  });
}
