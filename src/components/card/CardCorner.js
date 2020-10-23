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
  12: "K",
  13: "JOKER"
};
const CardCorner = ({ suit, number, align = "column" }) => (
  <div
    style={{
      display: "flex",
      flexDirection: align,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "600",
      textTransform: "uppercase",
      maxWidth: "65px"
    }}
  >
    <span>{NUMBER_MAP[number]}</span>
    <CardSuit suit={suit} height="35px" />
  </div>
);
export default CardCorner;
