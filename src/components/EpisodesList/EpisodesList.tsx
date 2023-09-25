import { FunctionComponent } from "react";
import styles from "./style.module.css";
import { Episode } from "../../types/types";

interface EpisodeListProps {
  results: Episode[];
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
              <tr key={index} className={index % 2 === 0 ? "shaded" : ""}>
                <td>{row.trackName}</td>
                <td>{row.releaseDate.toString()}</td>
                <td>{row.trackTimeMillis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
