import { FunctionComponent } from "react";
import { type Podcast } from "../../types/types";
import { PodcastItem } from "../PodcastItem";
import styles from "./style.module.css";

interface PodcastListProps {
  podcasts: Podcast[];
  searchTerm: string;
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
