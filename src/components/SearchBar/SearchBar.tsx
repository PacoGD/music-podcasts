import { FunctionComponent } from "react";
import styles from "./style.module.css";

interface SearchBarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  filteredPodcastsCount: number;
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({
  onChange,
  value,
  filteredPodcastsCount,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.searches}>{filteredPodcastsCount}</p>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder="Filter podcasts..."
      />
    </div>
  );
};
