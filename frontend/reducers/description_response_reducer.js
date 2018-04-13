import merge from 'lodash/merge';
import { RECEIVE_ALL_DESCRIPTION_RESPONSES,
  RECEIVE_ONE_DESCRIPTION_RESPONSE } from '../actions/description_response_actions';


const descriptionResponseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DESCRIPTION_RESPONSES:
      return merge({}, state, action.description_responses);
    case RECEIVE_ONE_DESCRIPTION_RESPONSE:
      const response = action.description_response;
      return merge({}, state, {[response.id]: response });
    default:
      return state;
  }
};
