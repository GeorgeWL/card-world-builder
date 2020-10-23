export const ACTION_SUBMIT_GENRE = "SUBMIT_GENRE";
export const ACTION_STEP_BACK = "STEP_BACK";
export const INITIAL_STATE = {
  currentStep: 0,
  genre: ""
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
    default:
      return { ...state };
  }
};
export default gameReducer;
