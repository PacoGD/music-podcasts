import { FunctionComponent } from "react";
import { Podcast } from "../../types/types";
import { PodcastCard } from "../PodcastCard";
import styles from "./style.module.css";

interface PodcastDetailsProps {
  podcast: Podcast;
}

export const PodcastDetails: FunctionComponent<PodcastDetailsProps> = ({
  podcast,
}) => {
  return (
    <div className={styles.container}>
      <PodcastCard
        img={podcast["im:image"]}
        title={podcast.title}
        autor={podcast["im:artist"]}
        summary={podcast.summary}
      />
      {/* Lista de episodios */}
    </div>
  );
};
