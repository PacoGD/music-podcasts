import { FunctionComponent, useState } from "react";
import styles from "./style.module.css";

export const SearchBar: FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.searches}>100</p>
      <input
        type="text"
        className={styles.input}
        value={searchQuery}
        onChange={handleChange}
        placeholder="Filter podcasts..."
      />
    </div>
  );
};
