export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = user => ({
  type: UPDATE_USER,
  user
});

export const updateUserInfo = user => dispatch => (
  dispatch(updateUser(user))
);
