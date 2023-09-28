import { FunctionComponent } from "react";
import { Podcast } from "../../types";
import { PodcastCard } from "../PodcastCard";
import styles from "./style.module.css";

interface PodcastDetailsProps {
  podcast: Podcast | null;
}

export const PodcastDetails: FunctionComponent<PodcastDetailsProps> = ({
  podcast,
}) => {
  if (!podcast) {
    return null;
  }

  return (
    <div className={styles.container}>
      <PodcastCard
        img={podcast["im:image"]}
        title={podcast.title}
        autor={podcast["im:artist"]}
        summary={podcast.summary}
        id={podcast.id.attributes["im:id"]}
      />
    </div>
  );
};
