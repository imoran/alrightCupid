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

// export const postResponse = (formResponse) => {
//   return $.ajax({
//     url: '/api/responses',
//     method: 'POST',
//     data: {
//       formResponse
//     }
//   });
// };

// export const getAllResponses = () => {
//   return $.ajax({
//     url:
//   })
// }

export const getAllQuestions = () => {
  return $.ajax({
    url: '/api/questions',
    method: 'GET'
  });
};

export const getAllAnswers = () => {

};

export const postAnswer = () => {

};

export const receiveAllDescriptionQuestions = () => {
  return $.ajax({
    url: '/api/descriptions',
    method: 'GET'
  });
};

export const getSingleDescriptionResponse = () => {

};

export const updateSingleDescriptionResponse = (id, descriptionResponse) => {
  return $.ajax({
    url: `/api/descriptions/${id}`,
    method: 'PATCH',
    data: { descriptionResponse }
  });
};
