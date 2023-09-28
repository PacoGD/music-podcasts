import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Podcast } from "../../types";
import styles from "./style.module.css";
import { useAppDispatch } from "../../hooks/store";
import { setSelectedPodcast } from "../../state/podcasts/slice";

interface PodcastItemProps {
  podcast: Podcast;
}

export const PodcastItem: FunctionComponent<PodcastItemProps> = ({
  podcast,
}) => {
  const dispatch = useAppDispatch();
  const handlePodcastClick = () => {
    dispatch(setSelectedPodcast(podcast));
  };
  return (
    <li className={styles.li} key={podcast.id.label}>
      <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
        <div className={styles.card} onClick={handlePodcastClick}>
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
