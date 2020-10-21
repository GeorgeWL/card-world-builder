import React, { useReducer } from "react";
import gameReducer, { ACTION_PROGRESSION } from "../../reducers/gameReducer";
import ErrorMessage from "../ErrorMessage";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
const INITIAL_STATE = {
  currentStep: 0
};
const TEST_ERROR = new Error("This is a Test")?.stack ?? "";
const StepManager = () => {
  const [gameData, dispatch] = useReducer(gameReducer, INITIAL_STATE);
  function handleStepSubmit(value) {
    dispatch({ type: ACTION_PROGRESSION, value });
  }
  switch (gameData.currentStep) {
    case 0:
      return <StepOne onSubmit={handleStepSubmit} />;
    case 1:
      return <StepTwo onSubmit={handleStepSubmit} />;
    case 2:
      return <StepThree onSubmit={handleStepSubmit} />;
    case 3:
      return <StepFour onSubmit={handleStepSubmit} />;
    default:
      return (
        <ErrorMessage
          title="Unexpected Step"
          message="something is wrong in the application"
          details={TEST_ERROR}
        />
      );
  }
};
export default StepManager;
