import React from "react";
import StepForm from "./StepForm";
const StepFive = ({ onSubmit }) => {
  function handleReset(evt) {}
  function handleSubmit(evt) {}
  return (
    <StepForm
      // disableSubmit={!genreSelection || genreSelection.length < 1}
      // showSubmit={choiceStep !== 0}
      // showCancel={choiceStep !== 0}
      onSubmit={handleSubmit}
      onReset={handleReset}
      header="Step Four"
      subheader="World Building"
    >
      Placeholder
    </StepForm>
  );
};
export default StepFive;
