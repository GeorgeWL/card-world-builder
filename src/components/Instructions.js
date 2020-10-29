import React from "react";
import classes from "../styles/instructions.module.scss";
const Instructions = ({ header = "Step Instructions", children, example }) => (
  <details className={classes.container}>
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
