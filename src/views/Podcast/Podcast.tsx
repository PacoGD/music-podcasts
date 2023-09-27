import { EpisodeList } from "../../components/EpisodesList";
import { PodcastDetails } from "../../components/PodcastDetails";
import { useEpisode } from "./hooks/useEpisode";
import styles from "./style.module.css";

function Podcast() {
  const { selectedPodcast, episodeList } = useEpisode();

  return (
    selectedPodcast &&
    episodeList && (
      <div className={styles.container}>
        <PodcastDetails podcast={selectedPodcast} />
        <EpisodeList results={episodeList} />
      </div>
    )
  );
}

export default Podcast;
