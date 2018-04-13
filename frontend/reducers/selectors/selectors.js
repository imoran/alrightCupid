import values from 'lodash/values';

export const selectAllUsers = state => values(state.entities.users);

export const searchUsers = (state, searchStr) => {
  return (values(state.entities.users).filter(user => user.first_name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1));
};
