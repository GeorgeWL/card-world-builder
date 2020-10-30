import React from "react";

import startCase from "lodash.startcase";
import { SUIT_COLORS } from "../../data/suitMap";
function suitToText(suit) {
  switch (suit) {
    case "heart":
      return <>&hearts;</>;
    case "diamond":
      return <>&diams;</>;
    case "spade":
      return <>&spades;</>;
    case "club":
      return <>&clubs;</>;
    default:
      console.error(`${suit} is unexpected`);
      break;
  }
}

const CardSuit = ({ suit }) => (
  <span
    style={{
      margin: "5px",
      color: SUIT_COLORS.red.includes(suit) ? "red" : "black"
    }}
    title={startCase(suit)}
    alt={startCase(suit)}
  >
    {suitToText(suit)}
  </span>
);
export default CardSuit;
