import EpisodeDetails from "../../components/EpisodeDetails/EpisodeDetails";
import { PodcastDetails } from "../../components/PodcastDetails";
import styles from "./style.module.css";
import { useAppSelector } from "../../hooks/store";

function EpisodeView() {
  const selectedPodcast = useAppSelector(
    (state) => state.podcasts.selectedPodcast
  );

  return (
    <div className={styles.container}>
      <PodcastDetails podcast={selectedPodcast} />
      <EpisodeDetails />
    </div>
  );
}

export default EpisodeView;
