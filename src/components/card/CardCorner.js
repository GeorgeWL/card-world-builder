import classNames from "classnames";
import React from "react";
import classes from "../../styles/card.module.scss";
import CardSuit from "./CardSuit";
const CardCorner = ({ suit, face, align = "column", isCard = false }) => (
  <div
    style={{
      flexDirection: align
    }}
    className={classNames(classes.cardCorner, { [classes.cardInline]: isCard })}
  >
    {face && <span>{face}</span>}
    <CardSuit suit={suit} size="35px" />
  </div>
);
export default CardCorner;
