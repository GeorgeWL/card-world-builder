import React from "react";
const Instructions = ({ header = "Instructions", children, example }) => (
  <details>
    <summary>{header}</summary>
    <div>{children}</div>
    {example && <em>{example}</em>}
  </details>
);
export default Instructions;
