import React from "react";
import classes from "../styles/headers.module.scss";
export const HeaderOne = ({ children, subheader, style = "primary" }) => (
  <h1 className={classes[style]}>
    {children}
    {subheader && <small>{subheader}</small>}
  </h1>
);
export const HeaderTwo = ({ children, subheader, style = "primary" }) => (
  <h1 className={classes[style]}>
    {children}
    {subheader && <small>{subheader}</small>}
  </h1>
);
export const HeaderThree = ({ children, subheader, style = "primary" }) => (
  <h1 className={classes[style]}>
    {children}
    {subheader && <small>{subheader}</small>}
  </h1>
);
const Header = ({ children, subheader, style = "primary", type = "h1" }) => {
  switch (type) {
    case "h1":
      return (
        <HeaderOne subheader={subheader} style={style}>
          {children}
        </HeaderOne>
      );
    case "h2":
      return (
        <HeaderTwo subheader={subheader} style={style}>
          {children}
        </HeaderTwo>
      );
    case "h3":
      return (
        <HeaderThree subheader={subheader} style={style}>
          {children}
        </HeaderThree>
      );
    default:
      return children;
  }
};
export default Header;
