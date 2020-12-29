import times from "lodash.times";
import { drawCardsFromDeck } from "./drawCards";

describe("draw card", () => {
  it.todo("draws a random card from the deck");
  it.todo(
    "draws a random card from the deck, excludes card in `excludeCard` param"
  );
});
describe("draw multiple cards", () => {
  it("draws the number of cards asked for", () => {
    times(52, (index) => expect(drawCardsFromDeck(index).length === index));
  });
  it("has no repeated cards", () => {
    const deck = new Set(drawCardsFromDeck(52));
    expect(deck.size === 52);
  });
  it.todo(
    "when provided cards to exclude, does not draw those cards, has no repeated cards"
  );
  it("when told to draw more cards than exist (e.g. 55), only draws 52", () => {
    const deck = drawCardsFromDeck(55);
    expect(deck.length === 52);
  });
});
