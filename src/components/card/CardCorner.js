import classNames from "classnames";
import React from "react";
import classes from "../../styles/card.module.scss";
import CardSuit from "./CardSuit";
const CardCorner = ({
  suit,
  face,
  align = "column",
  style,
  isCard = false
}) => (
  <div
    style={{
      flexDirection: align,
      ...style
    }}
    className={classNames(classes.cardCorner, { [classes.cardInline]: isCard })}
  >
    {face && <span>{face}</span>}
    <CardSuit suit={suit} size="35px" />
  </div>
);
export default CardCorner;
