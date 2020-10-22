import React from "react";
import classNames from "classnames";
import classes from "../styles/button.module.scss";
const Button = ({
  prefix,
  suffix,
  children,
  onClick,
  id,
  dataTags,
  style = "primary",
  active,
  type = "button",
  disabled
}) => (
  <button
    id={id}
    {...dataTags}
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={classNames(classes.button, classes[style], {
      [classes.active]: active
    })}
  >
    {prefix && <div>{prefix}</div>}
    <div>{children}</div>
    {suffix && <div>{suffix}</div>}
  </button>
);
export default Button;
