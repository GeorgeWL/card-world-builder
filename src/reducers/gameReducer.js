export const ACTION_SUBMIT_GENRE = "SUBMIT_GENRE";
export const ACTION_SUBMIT_CHARACTER_BASIC = "SUBMIT_BASIC_CHARACTERS";
export const ACTION_SUBMIT_CHARACTER_DETAILS = "SUBMIT_DETAILED_CHARACTERS";
export const ACTION_SUBMIT_WORLD_DETAILS = "SUBMIT_WORLD_DETAILS";
export const ACTION_SUBMIT_CONNECTIONS = "SUBMIT_CONNECTIONS";

export const ACTION_STEP_BACK = "STEP_BACK";
export const INITIAL_STATE = {
  currentStep: 0,
  genre: "",
  characters: []
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTION_SUBMIT_GENRE:
      return {
        ...state,
        currentStep: 1,
        genre: action.value.genre
      };
    case ACTION_STEP_BACK:
      return {
        ...state,
        currentStep: state.currentStep - 1
      };
    case ACTION_SUBMIT_CHARACTER_BASIC:
      return {
        ...state,
        characters: action.value,
        currentStep: state.currentStep + 1
      };
    case ACTION_SUBMIT_CHARACTER_DETAILS:
      return {
        ...state,
        characters: { ...state.characters, ...action.value },
        currentStep: state.currentStep + 1
      };
    case ACTION_SUBMIT_WORLD_DETAILS:
      return {
        ...state,
        currentStep: state.currentStep + 1
      };
    case ACTION_SUBMIT_CONNECTIONS:
      return {
        ...state,
        currentStep: state.currentStep + 1
      };
    default:
      return { ...state };
  }
};
export default gameReducer;
