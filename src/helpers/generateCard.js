import times from "lodash.times";
import { SUIT_MAP } from "../data/suitMap";
import { getRandomInt } from "./numberFunctions";

export function generateCard(excludeCards = [], includeJoker = false) {
  const max = includeJoker ? 13 : 12;
  const suitNumber = getRandomInt(4);
  const suit = SUIT_MAP[suitNumber].suit;
  const number = getRandomInt(max);
  return { suit, number };
}
export const generateCards = (
  number,
  excludeCards = [],
  includeJoker = false
) => times(number, () => generateCard(includeJoker));
