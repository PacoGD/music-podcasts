import { FunctionComponent, ReactNode } from "react";
import styles from "./style.module.css";

interface LayoutContainerProps {
  children: ReactNode;
}

export const LayoutContainer: FunctionComponent<LayoutContainerProps> = ({
  children,
}) => <div className={styles.layoutContainer}>{children}</div>;
