import React, { useState } from "react";
import { drawCardsFromDeck } from "../../helpers/drawCards";
import Button from "../buttons/Button";
import CardCorner from "../card/CardCorner";
import CardSet from "../card/CardSet";
import Flex from "../Flex";
import NumberInput from "../inputs/NumberInput";
import Label from "../Label";
import StepForm from "./StepForm";

const EXAMPLE_CARDS = drawCardsFromDeck(3);

const StepTwo = ({ onSubmit, onStepBack }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersToGenerate, setCharactersCount] = useState(1);
  function handleSubmit(evt) {
    onSubmit(characters);
  }
  function handleReset() {
    onStepBack();
  }
  function handleCharacterNumber(evt) {
    const {
      target: { value }
    } = evt;
    setCharactersCount(value);
  }
  function handleKeyPress(evt) {
    const { key } = evt;
    if (key.toLowerCase() === "enter") {
      evt.preventDefault();
      handleGenerateCards();
    }
  }
  function handleGenerateCards() {
    const cards = drawCardsFromDeck(charactersToGenerate, characters);
    setCharacters(cards);
  }

  return (
    <StepForm
      disableSubmit={charactersToGenerate < 1 || characters.length < 1}
      showSubmit={true}
      showCancel={true}
      onSubmit={handleSubmit}
      onReset={handleReset}
      header="Step Two"
      subheader="Generate Characters"
      instructions={
        <>
          <p>Next select a number of characters for your game.</p>
          <p>
            Use 2-3 for an easier, shorter world generation. 4-5 characters
            would be a greater challenge and force you to create a much larger,
            richer world.
          </p>
          <p>
            The value of each character card determines how detailed their
            backstory will be; face cards have a value of 10, Ace has a value of
            1.
          </p>
          <p>
            These may not be the only characters in this story, just your
            principal or main characters.
            <br />
            Other side characters will reveal themselves as needed in your
            world. They could be relationships with your main characters,
            faction leaders, or common friends and enemies.
          </p>
        </>
      }
      example={
        <>
          Alice wants a story that will have some focused conflict so she
          decides to have 3 characters. She deals 3 cards on the table in front
          of her:
          <Flex>
            {EXAMPLE_CARDS.map((card, index) => (
              <CardCorner
                key={index}
                align="row"
                face={card.face}
                suit={card.suit}
                isCard={true}
              />
            ))}
          </Flex>
        </>
      }
    >
      <Label id="characterCount">Set Character Count</Label>
      <NumberInput
        min={1}
        max={10}
        value={charactersToGenerate}
        onChange={handleCharacterNumber}
        onKeyPress={handleKeyPress}
        style={{ maxWidth: "50vw" }}
        id="characterCount"
      />
      <Button disabled={charactersToGenerate < 1} onClick={handleGenerateCards}>
        Generate {charactersToGenerate} characters
      </Button>
      <Label>Cards</Label>
      <CardSet cards={characters} mini={true} />
    </StepForm>
  );
};
export default StepTwo;
