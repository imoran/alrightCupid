import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_SEARCH_TERM } from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_SEARCH_TERM:
      const searchTerm = action.searchTerm;
      return merge({}, state, { searchTerm });
    default:
      return state;
  }
};

export default sessionReducer;
