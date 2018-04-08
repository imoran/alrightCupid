export const UPDATE_STEP = 'UPDATE_STEP';

export const updateStepAction = step => ({
  type: UPDATE_STEP,
  step
});

export const updateStepDispatch = step => dispatch => (
  dispatch(updateStepAction(step))
);
