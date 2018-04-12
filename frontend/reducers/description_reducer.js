import merge from 'lodash/merge';

import { RECEIVE_ALL_DESCRIPTION_QUESTIONS } from '../actions/description_actions';

const descriptionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_DESCRIPTION_QUESTIONS:
      return merge({}, state, action.description_questions);
    default:
      return state;
  }
};

export default descriptionReducer;
