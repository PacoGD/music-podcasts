import { useAppSelector } from "../../hooks/store";
import { Episode } from "../../types";
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

  const renderHTML = (html: string | undefined) => {
    return { __html: html || "" };
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{formatTitle(episode)}</p>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={renderHTML(episode?.description)}
      />
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
