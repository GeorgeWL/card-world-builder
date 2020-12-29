import { CODEX_DECK } from "../data/codex";

export const getRandomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));

// there's only 52 possible cards,
// grab a random card from a pre-set array
export function drawCardFromDeck(excludeCards = []) {
  const newDeck = CODEX_DECK.filter((card) => !excludeCards.includes(card));
  const newLength = newDeck.length;
  const cardNumber = getRandomInt(newLength);
  return newDeck[cardNumber];
}

export function drawCardsFromDeck(count, excludeCards = []) {
  const tempCards = [];
  const cardsToGenerate = count <= 52 ? count : 52;
  for (let index = 0; index < cardsToGenerate; index++) {
    tempCards.push(drawCardFromDeck([...excludeCards, ...tempCards]));
  }
  return tempCards;
}
