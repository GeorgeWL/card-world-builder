import React from "react";
const red = ["diamond", "heart"];
function getCardFace(suit, number) {
  let card = `${suit}-`;
  switch (number) {
    case 10:
      card += "JACK";
      break;
    case 11:
      card += "QUEEN";
      break;
    case 12:
      card += "KING";
      break;
    case 13:
      const colour = red.includes(suit) ? "red" : "black";
      card = `${colour}-JOKER`;
      break;
    default:
      break;
  }
  return card;
}
const CardRoyal = ({ suit, number }) => <div>{getCardFace(suit, number)}</div>;
export default CardRoyal;
