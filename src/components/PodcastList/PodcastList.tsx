import { FunctionComponent } from "react";
import { type Podcast } from "../../types";
import { PodcastItem } from "../PodcastCard";
import styles from "./style.module.css";

interface PodcastListProps {
  podcasts: Podcast[];
}

export const PodcastList: FunctionComponent<PodcastListProps> = ({
  podcasts,
}) => {
  return (
    <ul className={styles.ul}>
      {podcasts.map((podcast: Podcast) => (
        <PodcastItem podcast={podcast} />
      ))}
    </ul>
  );
};
