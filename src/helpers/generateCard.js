import { SUIT_MAP } from "../App";
import { getRandomInt } from "./numberFunctions";

export default (includeJoker = false) => {
  const max = includeJoker ? 13 : 12;
  const suit = SUIT_MAP[getRandomInt(4)].suit;
  const number = getRandomInt(max);
  return { suit, number };
};
