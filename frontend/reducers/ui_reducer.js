import { combineReducers } from 'redux';
import signup from './signup_reducer';
import modal from './modal_reducer';

export default combineReducers({
  modal,
  signup
});
