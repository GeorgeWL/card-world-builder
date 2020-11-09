import React from "react";
import { NUMBER_MAP } from "../../data/numberMap";
import CardSuit from "./CardSuit";
import classNames from "classnames";
import classes from "../../styles/card.module.scss";
const CardCorner = ({ suit, number, align = "column", isCard = false }) => (
  <div
    style={{
      flexDirection: align
    }}
    className={classNames(classes.cardCorner, { [classes.cardInline]: isCard })}
  >
    {number && <span>{NUMBER_MAP[number]}</span>}
    <CardSuit suit={suit} size="35px" />
  </div>
);
export default CardCorner;
