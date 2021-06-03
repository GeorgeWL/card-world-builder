import React from "react";
import StepForm from "./StepForm";
const StepFour = ({ onSubmit, onStepBack }) => {
  function handleSubmit(evt) {}
  return (
    <StepForm
      // disableSubmit={!genreSelection || genreSelection.length < 1}
      // showSubmit={choiceStep !== 0}
      // showCancel={choiceStep !== 0}
      onSubmit={handleSubmit}
      onReset={onStepBack}
      header="Step Four"
      subheader="World Building"
    >
      Placeholder
    </StepForm>
  );
};
export default StepFour;
