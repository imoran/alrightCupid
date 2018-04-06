export const CREATE_USER = 'CREATE_USER';

export const createNewUser = user => ({
  type: CREATE_USER,
  user
});

export const createANewUser = user => dispatch => (
  dispatch(createNewUser(user))
);
