import React from "react";
import StepForm from "./StepForm";
const StepTwo = ({ onSubmit }) => {
  function handleSubmit(evt) {
    onSubmit(evt.currentTarget);
  }
  function handleReset(evt) {}
  return (
    <StepForm
      // disableSubmit={!genreSelection || genreSelection.length < 1}
      showSubmit={true}
      showCancel={true}
      onSubmit={handleSubmit}
      onReset={handleReset}
      header="Step Two"
      subheader="Generate Characters"
    >
      Placeholder
    </StepForm>
  );
};
export default StepTwo;
