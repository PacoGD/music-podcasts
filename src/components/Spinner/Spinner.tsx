import { FunctionComponent } from "react";
import styles from "./style.module.css";

export const Spinner: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.animatedCircle} />
    </div>
  );
};
