import React, { useEffect, useState } from "react";
import { drawCardsFromDeck } from "../../helpers/drawCards";
import CardSet from "../card/CardSet";
import StepForm from "./StepForm";
const StepThree = ({ gameData, onSubmit, onStepBack }) => {
  const [details, setDetails] = useState();
  function handleSubmit(evt) {}
  function generateCharacterDetails(value) {
    return drawCardsFromDeck(value, gameData.characters);
  }
  useEffect(() => {
    for (const character in gameData.characters) {
      if (gameData.characters.hasOwnProperty(character)) {
        const element = gameData.characters[character];
        const detailList = generateCharacterDetails(element.value);
        console.log(detailList);
      }
    }
  });
  return (
    <StepForm
      // disableSubmit={!genreSelection || genreSelection.length < 1}
      // showSubmit={choiceStep !== 0}
      showCancel={true}
      onSubmit={handleSubmit}
      onReset={onStepBack}
      header="Step Three"
      subheader="Create Character Details"
    >
      <CardSet cards={gameData.characters} mini={true} />
    </StepForm>
  );
};
export default StepThree;
