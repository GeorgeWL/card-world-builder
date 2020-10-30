import React from "react";
import { NUMBER_MAP } from "../../data/numberMap";
import CardSuit from "./CardSuit";

const CardCorner = ({ suit, number, align = "column" }) => (
  <div
    style={{
      display: "flex",
      flexDirection: align,
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "600",
      textTransform: "uppercase",
      maxWidth: "40px"
    }}
  >
    <span>{NUMBER_MAP[number]}</span>
    <CardSuit suit={suit} height="35px" />
  </div>
);
export default CardCorner;
