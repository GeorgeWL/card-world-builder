import React, { useEffect, useState } from "react";
import classes from "./buttonSet.module.scss";
import classNames from "classnames";
const ButtonSet = ({ children, onChange, direction = "row" }) => {
  const [currentId, setCurrentId] = useState("");
  useEffect(() => {
    onChange && onChange(currentId);
  }, [currentId, onChange]);
  return (
    <div className={classNames(classes.buttonSet, classes[direction])}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          onClick: () => setCurrentId(child?.props?.id),
          active: child?.props?.id === currentId ?? false
        })
      )}
    </div>
  );
};
export default ButtonSet;
