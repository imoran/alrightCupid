import * as APIUtil from '../util/session_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';


export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
});

export const requestAllUsers = () => dispatch => {
  return APIUtil.getAllUsers()
  .then(users => dispatch(receiveAllUsers(users)));
};

export const requestSingleUser = id => dispatch => {
  return APIUtil.getOneUser(id)
  .then(user => dispatch(receiveSingleUser(user)));
};
