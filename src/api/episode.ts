export async function fetchPodcastEpisodes(podcastId: string) {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
      )}`
    );

    if (response.ok) {
      const data = await response.json();
      const contents = JSON.parse(data.contents);
      return contents.results;
    } else {
      throw new Error("Network response was not ok.");
    }
  } catch (error) {
    console.error("Error fetching podcast episodes:", error);
    throw error;
  }
}

export async function fetchPodcastEpisodesWithCors(podcastId: string) {
  const API_URL = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;

  const response = await fetch(API_URL);
  const data = await response.json();

  return data.results;
}
