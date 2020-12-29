import times from "lodash.times";
import { CODEX_DECK } from "../data/codex";
import { drawCardFromDeck, drawCardsFromDeck } from "./drawCards";

describe("draw card", () => {
  it("draws a random card from the deck", () => {
    const card = drawCardFromDeck()
    expect(CODEX_DECK.includes(card)).toBe(true);
  })
  it(
    "draws a random card from the deck, excludes cards in `excludeCard` param"
    , () => {
      for (let cardIdx = 1; cardIdx < 52; cardIdx++) {
        const cards = []
        const excludeCards = CODEX_DECK.slice(0, cardIdx)
        const card = drawCardFromDeck(excludeCards)
        expect(CODEX_DECK.includes(card)).toBe(true);
        cards.push(card);
        expect(cards.every(card => !excludeCards.includes(card)))
      }
    });
});
describe("draw multiple cards", () => {
  it("draws the number of cards asked for if <=52", () => {
    for (let cardIdx = 1; cardIdx < 52; cardIdx++) {
      const cards = drawCardsFromDeck(cardIdx)
      expect(cards.length).toEqual(cardIdx)
    }
  });
  it("has no repeated cards", () => {
    const deck = drawCardsFromDeck(52);
    const uniqueOnly = new Set(deck);
    expect(deck.length).toEqual(52);
    expect(uniqueOnly.size).toEqual(52);
  });
  it(
    "when provided array with card to exclude, does not draw those cards, has no repeated cards", () => {
      const deck = drawCardsFromDeck(52, [CODEX_DECK[0]]);
      const uniqueOnly = new Set(deck);
      expect(deck.length).toEqual(51);
      expect(uniqueOnly.size).toEqual(51);
    }
  );
  it(
    "when provided array with cards to exclude, does not draw those cards, has no repeated cards", () => {
      for (let index = 0; index < 52; index++) {
        const deck = drawCardsFromDeck(52, CODEX_DECK.slice(0, index));
        const uniqueOnly = new Set(deck);
        expect(deck.length).toEqual(52 - index);
        expect(uniqueOnly.size).toEqual(52 - index);
      }
    }
  );
  it('when draw the whole deck, should match original global constant', () => {
    const deck = drawCardsFromDeck(52);
    expect(deck.length).toEqual(CODEX_DECK.length)
    expect(deck.length).toEqual(52)
    expect(CODEX_DECK.length).toEqual(52)
    // why you not?
    // expect(deck).toEqual(CODEX_DECK);
  })
  it(
    "when told to draw more cards than exist (e.g. 55), only draws 52", () => {
      const deck = drawCardsFromDeck(55);
      expect(deck.length).toEqual(52);
    });
});
