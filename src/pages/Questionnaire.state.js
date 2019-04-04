export const PROGRESS_STATUS = "towernest/scenes/SignUp/progressStatus";
export const HIDE_INFO_BOX = "towernest/scenes/SignUp/hideInfoBox";

const initialState = {
  progressStatus: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROGRESS_STATUS:
      return { ...state, progressStatus: action.data };
    default:
      return state;
  }
};

export function setProgressStatus(data) {
  return {
    type: PROGRESS_STATUS,
    data
  };
}
