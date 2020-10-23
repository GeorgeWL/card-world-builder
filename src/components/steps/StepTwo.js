import React, { useState } from "react";
import generateCard from "../../helpers/generateCard";
import Button from "../buttons/Button";
import CardCorner from "../card/CardCorner";
import NumberInput from "../inputs/NumberInput";
import Label from "../Label";
import StepForm from "./StepForm";
const StepTwo = ({ onSubmit, onStepBack }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersToGenerate, setCharactersCount] = useState(0);
  function handleSubmit(evt) {
    onSubmit(evt.currentTarget);
  }
  function handleReset(evt) {
    if ("") {
    }
  }
  function handleCharacterNumber(evt) {
    const { value } = evt.target;
    setCharactersCount(value);
  }
  function handleGenerateCards() {
    const cards = Array(charactersToGenerate).map((_, index) => generateCard());
    setCharacters(cards);
  }

  return (
    <StepForm
      disableSubmit={charactersToGenerate < 1 && characters.length < 1}
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
          <ul>
            <li>
              <CardCorner align="row" number={3} suit="spade" />
            </li>
            <li>
              <CardCorner align="row" number={7} suit="diamond" />
            </li>
            <li>
              <CardCorner align="row" number={10} suit="heart" />
            </li>
          </ul>
        </>
      }
    >
      <Label id="characterCount">Set Charcter Count</Label>
      <NumberInput
        min={1}
        max={10}
        value={charactersToGenerate}
        onChange={handleCharacterNumber}
        id="characterCount"
      />
      <Button disabled={charactersToGenerate < 1} onClick={handleGenerateCards}>
        Generate {charactersToGenerate} characters
      </Button>
      <Label>Cards</Label>
      <div>
        {characters.map((card, index) => (
          <CardCorner
            key={index}
            suit={card.suit}
            number={card.number}
            align="row"
          />
        ))}
      </div>
    </StepForm>
  );
};
export default StepTwo;
