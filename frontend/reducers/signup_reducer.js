import { UPDATE_USER } from '../actions/signup_actions';

const initialState = {
  orientation: "Straight",
  gender: "Woman"
};


export default function signupReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}
