import { FunctionComponent } from "react";
import styles from "./style.module.css";
import { Episode } from "../../types/types";
import { Link } from "react-router-dom";

interface EpisodeListProps {
  results: Episode[];
}

function formatDate(dateISO: Date) {
  const date = new Date(dateISO);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Sumamos 1 porque los meses comienzan en 0
  const year = date.getFullYear();

  return `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;
}

function formatDuration(milliseconds: number) {
  const seconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let formattedTime = "";

  if (hours > 0) {
    formattedTime += `${hours.toString().padStart(2, "0")}:`;
  }

  formattedTime += `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
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

export const EpisodeList: FunctionComponent<EpisodeListProps> = (results) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <p className={styles.title}>Episodes: 66</p>
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
            {results?.results?.map((row, index) => (
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
