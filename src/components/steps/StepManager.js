import React, { useReducer } from "react";
import gameReducer, {
  ACTION_STEP_BACK,
  ACTION_STEP_FORWARD,
  ACTION_SUBMIT_CHARACTER_BASIC,
  ACTION_SUBMIT_CHARACTER_DETAILS,
  ACTION_UPDATE_MARKDOWN,
  ACTION_SUBMIT_GENRE,
  ACTION_SUBMIT_CONNECTIONS,
  INITIAL_STATE
} from "../../reducers/gameReducer";
import ErrorMessage from "../ErrorMessage";
import Header from "../Headers";
import TextAreaMarkdown from "../inputs/TextAreaMarkdown";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
const StepContainer = ({ children, setMarkdown, markdown }) => (
  <>
    {children}
    <Header headerLevel="h3">
      Notes{" "}
      <small>
        (
        <a
          href="https://www.markdownguide.org/basic-syntax/"
          target="_blank"
          rel="noreferrer noopener"
        >
          How to use Markdown
        </a>
        )
      </small>
    </Header>
    <TextAreaMarkdown setValue={setMarkdown} value={markdown} />
  </>
);
const StepManager = () => {
  const [gameData, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  function handleStepBack() {
    dispatch({ type: ACTION_STEP_BACK });
  }
  const createChildren = (currentStep) => {
    switch (currentStep) {
      case 0:
        return (
          <StepOne
            onSubmit={(value) => {
              dispatch({ type: ACTION_SUBMIT_GENRE, value });
              dispatch({ type: ACTION_STEP_FORWARD });
            }}
          />
        );
      case 1:
        return (
          <StepTwo
            onSubmit={(value) => {
              dispatch({ type: ACTION_SUBMIT_CHARACTER_BASIC, value });
              dispatch({ type: ACTION_STEP_FORWARD });
            }}
            onStepBack={handleStepBack}
          />
        );
      case 2:
        return (
          <StepThree
            gameData={gameData}
            onSubmit={(value, details) => {
              dispatch({
                type: ACTION_SUBMIT_CHARACTER_DETAILS,
                value,
                details
              });
              dispatch({ type: ACTION_STEP_FORWARD });
            }}
            onStepBack={handleStepBack}
          />
        );
      case 3:
        return (
          <StepFour
            gameData={gameData}
            onSubmit={() => dispatch({ type: ACTION_STEP_FORWARD })}
            onStepBack={handleStepBack}
          />
        );
      case 4:
        return (
          <StepFive
            gameData={gameData}
            onSubmit={(value) =>
              dispatch({ type: ACTION_SUBMIT_CONNECTIONS, value })
            }
            onStepBack={handleStepBack}
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
  return (
    <StepContainer
      markdown={gameData.markdownNotes}
      setMarkdown={(value) =>
        dispatch({ action: ACTION_UPDATE_MARKDOWN, value })
      }
    >
      {gameData?.deck.length}
      {createChildren(gameData.currentStep)}
    </StepContainer>
  );
};
export default StepManager;
