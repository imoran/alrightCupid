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

export const getAllUsers = (userHash) => {
  let url = '/api/users/?&';
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

export const getAllQuestionAnswers = () => {
  return $.ajax({
    url: '/api/question_answers',
    method: 'GET'
  });
};

export const searchUsers = name => {
  let url = `/api/users/?&search=${name}`;
  return $.ajax({
    url: url,
    method: 'GET',
  });
};


export const getAllQuestions = () => {
  return $.ajax({
    url: '/api/questions',
    method: 'GET'
  });
};

export const receiveAllDescriptionQuestions = () => {
  return $.ajax({
    url: '/api/descriptions',
    method: 'GET'
  });
};


export const updateDescriptionResponse = (description_response) => {
  return $.ajax({
    url: `/api/description_responses/${description_response.id}`,
    method: 'PATCH',
    data: { description_response }
  });
};

export const postDescriptionResponse = (description_responses) => {
  return $.ajax({
    url: '/api/description_responses',
    method: 'POST',
    data: { description_responses }
  });
};
