import React from "react";
function getCardFace(suit, number) {
  switch (number) {
    case 10:
      break;
    case 11:
      break;
    case 12:
      break;
    default:
      break;
  }
}
const CardRoyal = ({ suit, number }) => <div>{getCardFace(suit, number)}</div>;
export default CardRoyal;
