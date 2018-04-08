import { UPDATE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge';


export default function stepReducer(state = 1, action) {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_STEP:
      return action.step;
    default:
      return state;
  }
}
