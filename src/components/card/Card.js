import React from "react";
import CardCorner from "./CardCorner";
import classes from "../../styles/card.module.scss";
import CardFace from "./CardFace";
import PropTypes from "prop-types";
const Card = (cardProps) => (
  <div className={classes.card}>
    <div className={classes.cardTop}>
      <CardCorner {...cardProps} />
    </div>
    <div className={classes.cardMiddle}>
      <CardFace {...cardProps} />
    </div>
    <div className={classes.cardBottom}>
      <CardCorner {...cardProps} />
    </div>
  </div>
);
export default Card;
Card.propTypes = {
  suit: PropTypes.oneOf(["heart", "club", "spade", "diamond"]).isRequired,
  number: PropTypes.number.isRequired
};
