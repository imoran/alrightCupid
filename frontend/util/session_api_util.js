export const signup = user => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

export const signin = user => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

export const getAllUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'GET'
  });
};

export const getOneUser = id => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  });
};

export const postResponse = () => {
  return $.ajax({
    url: '/api/responses',
    method: 'POST'
  });
};

export const getAllQuestions = () => {
  return $.ajax({
    url: '/api/questions',
    method: 'GET'
  });
};
