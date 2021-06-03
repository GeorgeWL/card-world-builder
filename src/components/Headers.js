import React from "react";
import styles from "../styles/headers.module.scss";
import classNames from "classnames";
export const HeaderOne = ({
  children,
  subheader,
  headerStyle = "primary",
  ...rest
}) => (
  <h1 className={classNames(styles.header, styles[headerStyle])}>
    {children}
    {subheader && <small>{subheader}</small>}
  </h1>
);
export const HeaderTwo = ({
  children,
  subheader,
  headerStyle = "primary",
  ...rest
}) => (
  <h2 className={classNames(styles.header, styles[headerStyle])} {...rest}>
    {children}
    {subheader && <small>{subheader}</small>}
  </h2>
);
export const HeaderThree = ({
  children,
  subheader,
  headerStyle = "primary",
  ...rest
}) => (
  <h3 className={classNames(styles.header, styles[headerStyle])} {...rest}>
    {children}
    {subheader && <small>{subheader}</small>}
  </h3>
);
const Header = ({
  children,
  subheader,
  headerStyle = "primary",
  type = "h1",
  ...rest
}) => {
  switch (type) {
    case "h1":
      return (
        <HeaderOne subheader={subheader} headerStyle={headerStyle} {...rest}>
          {children}
        </HeaderOne>
      );
    case "h2":
      return (
        <HeaderTwo subheader={subheader} headerStyle={headerStyle} {...rest}>
          {children}
        </HeaderTwo>
      );
    case "h3":
      return (
        <HeaderThree subheader={subheader} headerStyle={headerStyle} {...rest}>
          {children}
        </HeaderThree>
      );
    default:
      return children;
  }
};
export default Header;
