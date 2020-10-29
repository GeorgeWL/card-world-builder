import React from "react";
import CardSet from "../card/CardSet";
import StepForm from "./StepForm";
const StepThree = ({ gameData, onSubmit, onStepBack }) => {
  function handleSubmit(evt) {}
  return (
    <StepForm
      // disableSubmit={!genreSelection || genreSelection.length < 1}
      // showSubmit={choiceStep !== 0}
      // showCancel={choiceStep !== 0}
      onSubmit={handleSubmit}
      onReset={onStepBack}
      header="Step Three"
      subheader="Create Character Details"
    >
      <CardSet cards={gameData.characters} />
    </StepForm>
  );
};
export default StepThree;
