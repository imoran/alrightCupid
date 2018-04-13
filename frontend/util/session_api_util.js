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

// export const postQuestionAnswer = (formResponse) => {
//   return $.ajax({
//     url: '/api/responses',
//     method: 'POST',
//     data: {
//       formResponse
//       //formResponse needs:
//       {
//         question_id:
//         response:
//
//       }
//     }
//   });
// };

// export const getAllResponses = () => {
//   return $.ajax({
//     url:
//   })
// }

export const getAllQuestionAnswers = () => {
  return $.ajax({
    url: '/api/question_answers',
    method: 'GET'
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


export const postDescriptionResponses = (description_responses) => {
  return $.ajax({
    url: '/api/description_responses',
    method: 'POST',
    data: { description_responses }
  });
};
