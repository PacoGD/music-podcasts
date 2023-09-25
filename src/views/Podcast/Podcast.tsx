import { useEffect, useState } from "react";
import { PodcastDetails } from "../../components/PodcastDetails";
import { Episode, Podcast } from "../../types/types";
import { useParams } from "react-router-dom";
import { EpisodeList } from "../../components/EpisodesList";
import styles from "./style.module.css";

function PodcastPage() {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const { podcastId } = useParams<{ podcastId: string }>();
  const cachedData = localStorage.getItem("podcastsData");
  const storedPodcasts: Podcast[] = JSON.parse(cachedData || "[]");
  const [episodeList, setEpisodeList] = useState<Episode[]>();

  useEffect(() => {
    function searchPodcastById(id: string, podcasts: Podcast[]) {
      const searchedPodcast = podcasts.find(
        (podcast) => podcast.id.attributes["im:id"] === id
      );
      if (searchedPodcast) {
        setSelectedPodcast(searchedPodcast);
      }
    }

    if (
      podcastId !== undefined &&
      podcastId !== selectedPodcast?.id.attributes["im:id"] &&
      storedPodcasts.length > 0
    ) {
      searchPodcastById(podcastId, storedPodcasts);
    }
  }, [podcastId, storedPodcasts, selectedPodcast]);

  useEffect(() => {
    const API_URL =
      "https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20";

    fetch(API_URL)
      .then(async (res) => await res.json())
      .then((res) => {
        setEpisodeList(res.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {selectedPodcast && episodeList ? (
        <div className={styles.container}>
          <PodcastDetails podcast={selectedPodcast} />
          <EpisodeList results={episodeList} />
        </div>
      ) : (
        <p>Podcast no encontrado.</p>
      )}
    </>
  );
}

export default PodcastPage;
