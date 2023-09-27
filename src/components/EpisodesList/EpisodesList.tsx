import { FunctionComponent } from "react";
import styles from "./style.module.css";
import { Episode } from "../../types/types";
import { Link } from "react-router-dom";
import { formatDate, formatDuration } from "./helper";

interface EpisodeListProps {
  results: Episode[];
  trackCount?: number;
}

function addUrltoTrackName(episode: Episode) {
  return episode.artistName !== undefined ? (
    <Link to={`/podcast/${episode.trackId}/episode/${episode.trackId}`}>
      {`${episode.trackName} - ${episode.artistName}`}
    </Link>
  ) : (
    <Link to={`/podcast/${episode.trackId}/episode/${episode.trackId}`}>
      {episode.trackName}
    </Link>
  );
}

export const EpisodeList: FunctionComponent<EpisodeListProps> = ({
  results,
  trackCount,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <p className={styles.title}>Episodes: {trackCount || "-"} </p>
      </div>
      <div className={styles.containerEpisodes}>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? styles.shaded : ""}>
                <td>{addUrltoTrackName(row)}</td>
                <td>{formatDate(row.releaseDate)}</td>
                <td>{formatDuration(row.trackTimeMillis)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
