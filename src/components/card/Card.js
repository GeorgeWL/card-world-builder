import React from "react";
import CardCorner from "./CardCorner";
import classes from "../../styles/card.module.scss";
import CardFace from "./CardFace";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NUMBER_MAP } from "../../data/numberMap";
const Card = (cardProps) => (
  <div
    className={classNames(classes.card, "shadow-low")}
    data-suit={cardProps.suit}
    data-number={NUMBER_MAP[cardProps.number]}
  >
    <div className={classes.cardTop}>
      <CardCorner {...cardProps} />
    </div>
    <div className={classes.interior}>
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
