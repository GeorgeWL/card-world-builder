import styles from "../styles/errorMessage.module.scss";
import React from "react";
const ErrorMessage = ({
  title = "there's been an error",
  message,
  details
}) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    <p>{message}</p>
    {details && (
      <details className={styles.details}>
        <summary>View details</summary>
        <dl>
          {details
            .split(/\n/gi)
            .map((line, index) =>
              index === 0 ? (
                <dt key={index}>{line}</dt>
              ) : (
                <dd key={index}>{line}</dd>
              )
            )}
        </dl>
      </details>
    )}
  </div>
);
export default ErrorMessage;
