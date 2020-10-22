import React from "react";
import Button from "../Button";
import Flex from "../Flex";
import Header from "../Headers";
import Instructions from "../Instructions";
const StepForm = ({
  onSubmit,
  onReset,
  onStepBack,
  disableSubmit,
  disableCancel,
  disableBackStep,
  showSubmit,
  showCancel,
  showBackStep,
  header,
  subheader,
  children,
  instructions
}) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(evt);
  }
  function handleReset(evt) {
    evt.preventDefault();
    onReset(evt);
  }
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Header subheader={subheader}>{header}</Header>
      {instructions && <Instructions>{instructions}</Instructions>}
      {children}
      {(showSubmit || showCancel) && (
        <Flex>
          {showBackStep && (
            <Button
              type="button"
              disabled={disableBackStep}
              onClick={onStepBack}
            >
              Previous Step
            </Button>
          )}
          {showSubmit && (
            <Button disabled={disableSubmit} type="submit">
              Next
            </Button>
          )}
          {showCancel && (
            <Button type="reset" disabled={disableCancel}>
              Back
            </Button>
          )}
        </Flex>
      )}
    </form>
  );
};
export default StepForm;
