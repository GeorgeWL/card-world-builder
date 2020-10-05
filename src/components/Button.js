import React from "react";
import classNames from "classnames";
import classes from "./button.module.scss";
const Button = ({
  prefix,
  suffix,
  children,
  onClick,
  id,
  dataTags,
  style = "primary"
}) => (
  <button
    id={id}
    {...dataTags}
    onClick={onClick}
    className={classNames(classes.button, classes[style])}
  >
    {prefix && <div>{prefix}</div>}
    <div>{children}</div>
    {suffix && <div>{suffix}</div>}
  </button>
);
export default Button;
