import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Podcast } from "../../types/types";
import styles from "./style.module.css";

interface PodcastItemProps {
  podcast: Podcast;
}

export const PodcastItem: FunctionComponent<PodcastItemProps> = ({
  podcast,
}) => {
  return (
    <li className={styles.li} key={podcast.id.label}>
      <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
        <div className={styles.card}>
          <img
            className={styles.circle}
            src={podcast["im:image"][2].label}
            alt={podcast["im:image"][2].label}
          />
          <div className={styles.rectangle}>
            <h2 className={styles.title}>
              {podcast.title.label.toUpperCase()}
            </h2>
            <p className={styles.author}>
              Author: {podcast["im:artist"].label}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};
