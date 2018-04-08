import { CREATE_USER } from '../actions/signup_actions';
import merge from 'lodash/merge';

const initialState = {
  orientation: "Straight",
  gender: "Woman"
};


export default function signupReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    default:
      return state;
  }
}
