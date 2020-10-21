import React from "react";
import Button from "../Button";
import Flex from "../Flex";
import Header from "../Headers";
const StepForm = ({
  onSubmit,
  onReset,
  disableSubmit,
  disableCancel,
  showSubmit,
  showCancel,
  header,
  subheader,
  children
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
      {children}
      {(showSubmit || showCancel) && (
        <Flex>
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
