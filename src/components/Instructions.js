import React from "react";
import styles from "../styles/instructions.module.scss";
const Instructions = ({
  header = "Step Instructions",
  children,
  example,
  open = false
}) => (
  <details className={styles.container} open={open}>
    <summary className={styles.header}>{header}</summary>
    <div className={styles.main}>{children}</div>
    {example && (
      <div>
        <strong>Example:</strong> <em className={styles.quote}>{example}</em>
      </div>
    )}
  </details>
);
export default Instructions;
