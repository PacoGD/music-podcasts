import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Spinner } from "../Spinner";

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.headerTitle} to="/">
          Podcaster
        </Link>
        <Spinner />
      </div>
      <div className={styles.line} />
    </header>
  );
};
