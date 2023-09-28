import { FunctionComponent } from "react";
import styles from "./style.module.css";
import { Episode } from "../../types/types";
import { Link } from "react-router-dom";
import { formatDate, formatDuration } from "./helper";
import { useAppDispatch } from "../../hooks/store";
import { addEpisode } from "../../state/episodes/slice";

interface EpisodeListProps {
  results: Episode[];
  trackCount?: number;
}

function addLinktoTrackName(episode: Episode) {
  return episode.artistName !== undefined ? (
    <Link to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}>
      {`${episode.trackName} - ${episode.artistName}`}
    </Link>
  ) : (
    <Link to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}>
      {episode.trackName}
    </Link>
  );
}

export const EpisodeList: FunctionComponent<EpisodeListProps> = ({
  results,
  trackCount,
}) => {
  const dispatch = useAppDispatch();
  const handleSetEpisode = (episode: Episode) => {
    dispatch(addEpisode(episode));
  };
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
                <td onClick={() => handleSetEpisode(row)}>
                  {addLinktoTrackName(row)}
                </td>
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
