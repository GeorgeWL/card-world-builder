import React from "react";
const red = ["diamond", "heart"];
function getCardFace(suit, number) {
  let card = `${suit}-NUMBER`;
  switch (number) {
    case 10:
      card = card.replace("NUMBER", "JACK");
      break;
    case 11:
      card = card.replace("NUMBER", "QUEEN");
      break;
    case 12:
      card = card.replace("NUMBER", "KING");
      break;
    case 13:
      const colour = red.includes(suit) ? "red" : "black";
      card = `${colour}-JOKER`;
      break;
    default:
      console.warn("no case for", number);
      break;
  }
  return card;
}
const CardRoyal = ({ suit, number }) => <div>{getCardFace(suit, number)}</div>;
export default CardRoyal;
