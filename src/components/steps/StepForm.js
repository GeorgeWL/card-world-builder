import React from "react";
import Button from "../buttons/Button";
import Flex from "../Flex";
import Header from "../Headers";
import Instructions from "../Instructions";
const StepForm = ({
  onSubmit,
  onReset,
  disableSubmit,
  disableCancel,
  showSubmit = !!onSubmit,
  showCancel = !!onReset,
  header,
  subheader,
  children,
  instructions,
  example
}) => {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(evt);
  }
  function handleReset(evt) {
    evt.preventDefault();
    onReset && onReset(evt);
  }
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Flex flexDirection="column">
        <Header subheader={subheader}>{header}</Header>
        {instructions && (
          <Instructions example={example} open>
            {instructions}
          </Instructions>
        )}
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
      </Flex>
    </form>
  );
};
export default StepForm;
