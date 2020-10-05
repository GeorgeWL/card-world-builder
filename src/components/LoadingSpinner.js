import React from "react";
import classes from "./loader.module.scss";
import { ReactComponent as Heart } from "../assets/noun_heart_suit.svg";
import { ReactComponent as Diamond } from "../assets/noun_diamond_suit.svg";
import { ReactComponent as Spade } from "../assets/noun_spade_suit.svg";
import { ReactComponent as Club } from "../assets/noun_club_suit.svg";
const LoadingSpinner = () => (
  <div className={classes.loader}>
    <span>
      <Heart height="20px" width="20px" />
    </span>
    <span>
      <Spade height="20px" width="20px" />
    </span>
    <span>
      <Club height="20px" width="20px" />
    </span>
    <span>
      <Diamond height="20px" width="20px" />
    </span>
  </div>
);
export default LoadingSpinner;
