import React from "react";
import StepForm from "./StepForm";
const StepFive = ({ onSubmit, onStepBack }) => {
  return (
    <StepForm
      onSubmit={onSubmit}
      onReset={onStepBack}
      header="Step Five"
      subheader="Connections"
    >
      Placeholder
    </StepForm>
  );
};
export default StepFive;
