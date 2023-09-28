import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Spinner } from "../Spinner";
import { useAppSelector } from "../../hooks/store";

export const Header: FunctionComponent = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.headerTitle} to="/">
          Podcaster
        </Link>
        {isLoading && <Spinner />}
      </div>
      <div className={styles.line} />
    </header>
  );
};
