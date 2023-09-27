import { EpisodeList } from "../../components/EpisodesList";
import { PodcastDetails } from "../../components/PodcastDetails";
import { usePodcastData } from "./hooks/usePodcastData";
import styles from "./style.module.css";

function Podcast() {
  const { selectedPodcast, episodeList } = usePodcastData();

  return (
    selectedPodcast &&
    episodeList && (
      <div className={styles.container}>
        <PodcastDetails podcast={selectedPodcast} />
        <EpisodeList
          results={episodeList.slice(1)}
          trackCount={episodeList[0].trackCount}
        />
      </div>
    )
  );
}

export default Podcast;
