import { FunctionComponent } from "react";
import { IMArtist, IMImage, Icon } from "../../types/types";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

interface PodcastCardProps {
  img: IMImage[];
  title: Icon;
  autor: IMArtist;
  summary: Icon;
  id: string;
}

export const PodcastCard: FunctionComponent<PodcastCardProps> = ({
  img,
  title,
  autor,
  summary,
  id,
}) => {
  const navigate = useNavigate();

  function deleteOverFlowUrl(summary: Icon) {
    const urlRegex = /https?:\/\/[^\s]+/g;
    return summary.label.replace(urlRegex, "");
  }

  function handleCardClick() {
    navigate(`/podcast/${id}`);
  }

  return (
    <div className={styles.container}>
      <img src={img[2].label} alt={title.label} onClick={handleCardClick} />
      <div className={styles.line} />

      <div className={styles.containerTitle}>
        <p className={styles.title} onClick={handleCardClick}>
          {title.label}
        </p>
        <p className={styles.autor} onClick={handleCardClick}>
          by {autor.label}
        </p>
      </div>

      <div className={styles.line} />

      <div className={styles.containerDescription}>
        <p className={styles.description}>Description: </p>
        <p className={styles.summary}>{deleteOverFlowUrl(summary)}</p>
      </div>
    </div>
  );
};
