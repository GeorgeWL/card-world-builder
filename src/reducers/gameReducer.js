export const ACTION_SUBMIT_GENRE = "SUBMIT_GENRE";
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
    default:
      return { ...state };
  }
};
export default gameReducer;
