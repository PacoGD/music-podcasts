import { useAppSelector } from "../../hooks/store";
import { Episode } from "../../types/types";
import styles from "./style.module.css";

function formatTitle(episode: Episode | null) {
  return episode?.artistName !== undefined
    ? `${episode?.trackName} - ${episode?.artistName}`
    : episode?.trackName;
}

function EpisodeDetails() {
  const episode: Episode | null = useAppSelector(
    (state) => state.episodes.episode
  );
  return (
    <div className={styles.container}>
      <p className={styles.title}>{formatTitle(episode)}</p>
      <p className={styles.description}>{episode?.description}</p>
      <audio controls>
        <source
          className={styles.sourceAudio}
          src={episode?.episodeUrl}
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default EpisodeDetails;
