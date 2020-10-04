import React from "react";
import CardSuit from "./CardSuit";
const NUMBER_MAP = {
  0: "A",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  6: "7",
  7: "8",
  8: "9",
  9: "10",
  10: "J",
  11: "Q",
  12: "K"
};
const CardCorner = ({ suit, number }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      fontWeight: "600",
      textTransform: "uppercase"
    }}
  >
    {NUMBER_MAP[number]}
    <CardSuit suit={suit} />
  </div>
);
export default CardCorner;
