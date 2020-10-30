import times from "lodash.times";
import React from "react";
import CardRoyal from "./CardRoyal";
import CardSuit from "./CardSuit";
const royals = [10, 11, 12];
const CardFace = ({ suit, number }) => {
  const numberArray = times(number + 1, (index) => index);
  return (
    <>
      {!royals.includes(number) ? (
        numberArray.map((number) => (
          <div id={`${suit}-${number}`} key={`${suit}-${number}`}>
            <CardSuit width="40px" suit={suit} />
          </div>
        ))
      ) : (
        <CardRoyal suit={suit} />
      )}
    </>
  );
};
export default CardFace;
