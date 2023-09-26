import { Episode } from "../../types/types";
import styles from "./style.module.css";

interface EpisodeDetailsProps {
  episode: Episode;
}

function addUrltoTrackName(episode: Episode) {
  return episode.artistName !== undefined
    ? `${episode.trackName} - ${episode.artistName}`
    : episode.trackName;
}

function EpisodeDetails({ episode }: EpisodeDetailsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{addUrltoTrackName(episode)}</p>
      <p className={styles.description}>{episode.description}</p>
      <audio controls>
        <source
          className={styles.sourceAudio}
          src={episode.episodeUrl}
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}

export default EpisodeDetails;
