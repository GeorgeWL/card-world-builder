import React from "react";
import classes from "../styles/instructions.module.scss";
const Instructions = ({
  header = "Step Instructions",
  children,
  example,
  open = false
}) => (
  <details className={classes.container} open={open}>
    <summary className={classes.header}>{header}</summary>
    <div className={classes.main}>{children}</div>
    {example && (
      <div>
        <strong>Example:</strong> <em className={classes.quote}>{example}</em>
      </div>
    )}
  </details>
);
export default Instructions;
