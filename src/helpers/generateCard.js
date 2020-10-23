import times from "lodash.times";
import { getRandomInt } from "./numberFunctions";
export const SUIT_MAP = [
  { index: 0, suit: "heart", genre: "Medieval/Fantasy" },
  { index: 1, suit: "spade", genre: "Science Fiction" },
  { index: 2, suit: "diamond", genre: "Modern/Cyberpunk" },
  { index: 3, suit: "club", genre: "Apocalyptic/Post-apocalyptic" }
];
export function generateCard(includeJoker = false) {
  const max = includeJoker ? 13 : 12;
  const suitNumber = getRandomInt(4);
  const suit = SUIT_MAP[suitNumber].suit;
  const number = getRandomInt(max);
  return { suit, number };
}
export const generateCards = (number, includeJoker = false) =>
  times(number, () => generateCard(includeJoker));
