import React from "react";
import classes from "../styles/loader.module.scss";
import { ReactComponent as Heart } from "../assets/noun_heart_suit.svg";
import { ReactComponent as Diamond } from "../assets/noun_diamond_suit.svg";
import { ReactComponent as Spade } from "../assets/noun_spade_suit.svg";
import { ReactComponent as Club } from "../assets/noun_club_suit.svg";
import classNames from "classnames";
const LoadingSpinner = ({ finished }) => (
  <div
    className={classNames(classes.loader, { [classes.completed]: finished })}
  >
    <span>
      <Heart width="30px" />
    </span>
    <span>
      <Spade width="30px" />
    </span>
    <span>
      <Club width="30px" />
    </span>
    <span>
      <Diamond width="30px" />
    </span>
  </div>
);
export default LoadingSpinner;
