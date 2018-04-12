import merge from 'lodash/merge';

import { RECEIVE_ALL_DESCRIPTION_QUESTIONS } from '../actions/description_actions';

const descriptionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.descriptions) {
    case RECEIVE_ALL_DESCRIPTION_QUESTIONS:
      return merge({}, state, action.descriptions);
    default:
      return state;
  }
};

export default descriptionReducer;
