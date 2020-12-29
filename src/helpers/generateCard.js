import times from "lodash.times";
import { CODEX_DECK } from "../data/codex";
import { getRandomInt } from "./numberFunctions";

// I'm thinking now - there's only 52 possible cards,
//  would it make sense to just grab a random card from a pre-set array instead?
export function drawCardFromDeck(excludeCards = []) {
  const newDeck = CODEX_DECK.filter((card) => !excludeCards.includes(card));
  const newLength = newDeck.length;
  const cardNumber = getRandomInt(newLength);
  return newDeck[cardNumber];
}
export function drawCardsFromDeck(count, excludeCards = []) {
  return times(count, drawCardFromDeck(excludeCards));
}
