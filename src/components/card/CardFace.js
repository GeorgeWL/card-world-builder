import React from "react";
import CardRoyal from "./CardRoyal";
import CardSuit from "./CardSuit";
const royals = [10, 11, 12];
const CardFace = ({ suit, number }) => {
  return (
    <>
      <div id={`${suit}-${number}`} key={`${suit}-${number}`}>
        {!royals.includes(number) ? (
          <CardSuit size="200px" suit={suit} />
        ) : (
          <CardRoyal suit={suit} />
        )}
      </div>
    </>
  );
};
export default CardFace;
