import { FunctionComponent } from "react";
import { IMArtist, IMImage, Icon } from "../../types/types";
import styles from "./style.module.css";

interface PodcastCardProps {
  img: IMImage[];
  title: Icon;
  autor: IMArtist;
  summary: Icon;
}

export const PodcastCard: FunctionComponent<PodcastCardProps> = ({
  img,
  title,
  autor,
  summary,
}) => {
  function deleteOverFlowUrl(summary: Icon) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return summary.label.replace(urlRegex, "");
  }

  return (
    <div className={styles.container}>
      <img src={img[2].label} alt={title.label} />
      <div className={styles.line} />

      <div className={styles.containerTitle}>
        <p className={styles.title}>{title.label}</p>
        <p className={styles.autor}>by {autor.label}</p>
      </div>

      <div className={styles.line} />

      <div className={styles.containerDescription}>
        <p className={styles.description}>Description: </p>
        <p className={styles.summary}>{deleteOverFlowUrl(summary)}</p>
      </div>
    </div>
  );
};
