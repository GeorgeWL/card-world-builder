export const ACTION_PROGRESSION = "PROGRESS";
const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTION_PROGRESSION:
      return { ...state };
    default:
      console.log({ state, action });
      return { ...state };
  }
};
export default gameReducer;
