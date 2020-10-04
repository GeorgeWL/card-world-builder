import React from "react";
import { ReactComponent as Heart } from "../assets/noun_heart_suit.svg";
import { ReactComponent as Diamond } from "../assets/noun_diamond_suit.svg";
import { ReactComponent as Spade } from "../assets/noun_spade_suit.svg";
import { ReactComponent as Club } from "../assets/noun_club_suit.svg";
import startCase from "lodash.startcase";
function suitToImage(suit, props) {
  console.log({ props, suit });
  switch (suit) {
    case "heart":
      return <Heart {...props} />;
    case "diamond":
      return <Diamond {...props} />;
    case "spade":
      return <Spade {...props} />;
    case "club":
      return <Club {...props} />;
    default:
      console.error(`${suit} is unexpected`);
      break;
  }
}

const CardSuit = ({ suit }) =>
  suitToImage(suit, {
    title: startCase(suit),
    alt: startCase(suit)
  });
export default CardSuit;
