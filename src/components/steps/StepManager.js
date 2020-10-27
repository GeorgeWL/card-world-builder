import React, { useReducer } from "react";
import gameReducer, {
  ACTION_STEP_BACK,
  ACTION_SUBMIT_CHARACTER_BASIC,
  ACTION_SUBMIT_CHARACTER_DETAILS,
  ACTION_SUBMIT_GENRE,
  INITIAL_STATE
} from "../../reducers/gameReducer";
import ErrorMessage from "../ErrorMessage";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const StepManager = () => {
  const [gameData, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  function handleStepBack() {
    dispatch({ type: ACTION_STEP_BACK });
  }

  switch (gameData.currentStep) {
    case 0:
      return (
        <StepOne
          onSubmit={(value) => dispatch({ type: ACTION_SUBMIT_GENRE, value })}
        />
      );
    case 1:
      return (
        <StepTwo
          onSubmit={(value) =>
            dispatch({ type: ACTION_SUBMIT_CHARACTER_BASIC, value })
          }
          onStepBack={handleStepBack}
        />
      );
    case 2:
      return (
        <StepThree
          gameData={gameData}
          onSubmit={(value) =>
            dispatch({ type: ACTION_SUBMIT_CHARACTER_DETAILS, value })
          }
        />
      );
    case 3:
      return (
        <StepFour
          gameData={gameData}
          onSubmit={(value) =>
            dispatch({ type: ACTION_SUBMIT_CHARACTER_DETAILS, value })
          }
        />
      );
    case 4:
      return (
        <StepFive
          gameData={gameData}
          onSubmit={(value) =>
            dispatch({ type: ACTION_SUBMIT_CHARACTER_DETAILS, value })
          }
        />
      );
    default:
      return (
        <ErrorMessage
          title="Unexpected Step"
          message="something is wrong in the application"
        />
      );
  }
};
export default StepManager;
